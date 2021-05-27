<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelTrait;
use Carbon\Carbon;
class VaccineStock extends Model
{
  use ModelTrait;
  protected $fillable = [
    'vaccine_id',
    'quantity',
    'validity',
    'batch',
    'vendor_id'
  ];

  public $searchable = [
    'vaccines.name',
    'vendors.name',
    'vaccine_stocks.batch'
  ];

  public function getRules(){
    return [
      'vaccine_id'=>'required',
      'quantity'=>'required',
      'validity'=>'required|date_format:d/m/Y',
      'batch'=>'required',
      'vendor_id'=>'required'
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
      'vaccine_stocks.*',
      'vaccines.name as vaccine_name',
      'vendors.name as vendor_name'
    )->leftJoin('vaccines','vaccines.id','=','vaccine_stocks.vaccine_id')
    ->leftJoin('vendors','vendors.id','=','vaccine_stocks.vendor_id');
  } 

  public function getValidityAttribute($val){
    if(!empty($val))
      return Carbon::parse($val)->format('d/m/Y');
  }

  public function setValidityAttribute($val){
    $this->attributes['validity'] = Carbon::createFromFormat('d/m/Y',$val)->format('Y-m-d');
  }
}
