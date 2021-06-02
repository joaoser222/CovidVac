<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use App\Traits\ModelTrait;
class Patient extends Model
{
  use ModelTrait;
  public $fillable = [
    'name',
    'phone',
    'email',
    'cpf',
    'rg',
    'cep',
    'number',
    'complement',
    'street',
    'district',
    'city',
    'state_id',
    'birth_date'
  ];

  public function getRules(){
    $request = request();
    $rules = [
      'name'=>'required',
      'email' => 'required|email|unique:patients,email,'.$this->id.',id',
      'phone'=>'required',
      'cpf'=>'required',
      'rg'=>'required',
      'cep'=>'required',
      'number'=>'required',
      'street'=>'required',
      'district'=>'required',
      'city'=>'required',
      'state_id'=>'required',
      'birth_date'=>'required',
    ];

    return $rules;
  }

  public function getBirthDateAttribute($val){
    if(!empty($val))
      return Carbon::parse($val)->format('d/m/Y');
  }

  public function setBirthDateAttribute($val){
    $this->attributes['birth_date'] = Carbon::createFromFormat('d/m/Y',$val)->format('Y-m-d');
  }
}
