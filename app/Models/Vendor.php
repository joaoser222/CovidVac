<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelTrait;

class Vendor extends Model
{
  use ModelTrait;
  protected $fillable = ['name'];

  public function getRules(){
    return [
      'name'=>'required'
    ];
  }
}
