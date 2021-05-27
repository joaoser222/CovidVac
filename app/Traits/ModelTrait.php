<?php
namespace App\Traits;
use Carbon\Carbon;
trait ModelTrait
{
  public function scopeFields($query){
    return $query;
  }

  public function getCreatedAtAttribute($val){
    return Carbon::parse($val)->format('d/m/Y H:i:s');
  }

  public function getUpdatedAtAttribute($val){
    if(!empty($val))
      return Carbon::parse($val)->format('d/m/Y H:i:s');
  }
}