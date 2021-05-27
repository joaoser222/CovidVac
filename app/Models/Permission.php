<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
  protected $fillable = [
    'name',
    'description'
  ];

  public function Role(){
    return $this->belongsToMany('App\Models\Role','permission_role');
  }
}
