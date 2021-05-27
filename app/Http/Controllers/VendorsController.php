<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;

class VendorsController extends Controller
{
  use ControllerTrait;
  public $module = 'vendor';
  public $label = 'Fabricantes';
  protected $model = 'App\Models\Vendor';
}
