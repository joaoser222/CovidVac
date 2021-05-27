<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelTrait;

class Vaccine extends Model
{
  use ModelTrait;
  protected $fillable = [
    'name',
    'dose_per_use',
    'dose_days_range'
  ];

  public function getRules(){
    return [
      'name'=>'required',
      'dose_per_use'=>'required',
      'dose_days_range'=>'required'
    ];
  }
}
