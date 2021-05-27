<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;

class VaccineStocksController extends Controller
{
  use ControllerTrait;
  
  public $module = 'vaccine_stock';
  public $label = 'Estoque de Vacinas';
  protected $model = 'App\Models\VaccineStock';
}
