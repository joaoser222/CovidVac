<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;
use App\Models\Vaccine;
use App\Models\VaccineStock;
use Carbon\Carbon;
use DB;
class PatientVaccinationsController extends Controller
{
  use ControllerTrait;

  public $module = 'patient_vaccination';
  public $label = 'Vacinação de Pacientes';
  public $model = 'App\Models\PatientVaccination';

  public function history(Request $request){
    $model = new $this->model;
    $vaccine = Vaccine::find($request->vaccine_id);
    $data = $model->where([
      'vaccine_id'=>$request->vaccine_id,
      'patient_id'=>$request->patient_id
    ])
    ->get();

    if(!empty($data->toArray())){
      $last = $data->last();
      $next_date = Carbon::createFromFormat('d/m/Y H:i:s',$last->created_at)->addDays($vaccine->dose_days_range);
      if($next_date>Carbon::now()){
        return response([
          'error'=>'O intervalo de dias entre doses deve ser no mínimo de '.$vaccine->dose_days_range.' dia(s)!'
        ],422);
      }
      
      if(count($data)>=$vaccine->dose_per_use){
        return response([
          'error'=>'O paciente já concluiu todas as doses desta vacina!']
        ,422);
      }

      return response()->json(['vendor_id'=>$last->vendor_id]);
    }
  }

  private function groupBatchs($stocks){
    $group = [];
    $validities = [];
    foreach($stocks as $item){
      if(empty($group[$item['batch']])) $group[$item['batch']] = [];
      $group[$item['batch']][] = ['validity'=>$item['validity'],'quantity'=>$item['quantity']];
    }
    return $group;
  }

  public function getStocks($vendor_id){
    $entries = VaccineStock::select('batch','validity',DB::raw('SUM(quantity) as quantity'))
    ->where('vendor_id',$vendor_id)
    ->groupBy('batch','validity')
    ->get()
    ->toArray();
    $model = new $this->model;
    $outs = $model->select('batch','validity',DB::raw('COUNT(id) as quantity'))
    ->where('vendor_id',$vendor_id)
    ->groupBy('batch','validity')
    ->get()
    ->toArray();
    $stocks = [];

    /**
     * Efetua o cálculo de verificação de quantidade de entradas e vacinas
     * já Aplicadas
     */
    if(!empty($entries)){
      $entry_batchs = $this->groupBatchs($entries);
      $out_batchs = $this->groupBatchs($outs);
      foreach($entry_batchs as $batch=>$validities){
        if(empty($stocks[$batch])) $stocks[$batch] = [];
        $out_validities = !empty($out_batchs[$batch])?$out_batchs[$batch]:[];
        
        foreach($validities as $entry){
          if(!empty($out_validities)){
            $outs = array_filter($out_validities,function($value)use($entry){
              return $value['validity']==$entry['validity'];
            });
            if(!empty($outs)){
              [$out] = $outs;
              $quantity = $entry['quantity'] - $out['quantity'];
              if($quantity>0){
                $stocks[$batch][] = [
                  'validity'=>$entry['validity'],
                  'quantity'=>$quantity
                ];
              }
            }
          }else{
            $stocks[$batch] = $validities;
          }
        }
      }
      return response()->json($stocks);
    }

    return response([
      'error'=>'Não há estoques de vacina para este fornecedor!']
    ,422);
  }
}
