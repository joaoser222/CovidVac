<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;

class VaccinesController extends Controller
{
  use ControllerTrait;
  
  public $module = 'vaccine';
  public $label = 'Vacinas';
  public $model = 'App\Models\Vaccine';
}
