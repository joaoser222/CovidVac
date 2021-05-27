<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ModelTrait;
class Role extends Model
{
  use ModelTrait;
  protected $fillable = [
    'name',
    'description'
  ];

  public function Permissions(){
    return $this->belongsToMany('App\Models\Permission','permission_role');
  }

  public function getRules(){
    return [
      'name'=>'required',
      'description'=>'required'
    ];
  }
}
