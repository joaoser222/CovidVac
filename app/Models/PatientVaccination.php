<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelTrait;
use Carbon\Carbon;
class PatientVaccination extends Model
{
  use ModelTrait;

  protected $fillable = [
    'vaccine_id',
    'patient_id',
    'validity',
    'batch',
    'vendor_id'
  ];

  public $searchable = [
    'vaccines.name',
    'patients.name',
    'vendors.name'
  ];

  public function getRules(){
    return [
      'vaccine_id'=>'required',
      'patient_id'=>'required',
      'validity'=>'required',
      'batch'=>'required',
      'vendor_id'=>'required',
    ];
  }

  /**
   * Adiciona campos no select para pesquisa
   *
   * @param Builder $query
   * @return Builder 
   * 
  */
  public function scopeFields($query)
  {
    return $query->addSelect(
      'patient_vaccinations.*',
      'vaccines.name as vaccine_name',
      'patients.name as patient_name',
      'vendors.name as vendor_name'
    )->leftJoin('vaccines','vaccines.id','=','patient_vaccinations.vaccine_id')
    ->leftJoin('patients','patients.id','=','patient_vaccinations.patient_id')
    ->leftJoin('vendors','vendors.id','=','patient_vaccinations.vendor_id');
  } 

  public function getValidityAttribute($val){
    if(!empty($val))
      return Carbon::parse($val)->format('d/m/Y');
  }

  public function setValidityAttribute($val){
    $this->attributes['validity'] = Carbon::createFromFormat('d/m/Y',$val)->format('Y-m-d');
  }
}
