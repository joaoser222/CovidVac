<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;
use App\Models\State;
use DB;
class PatientsController extends Controller
{
  use ControllerTrait;

  public $module = 'patient';
  public $label = 'Pacientes';
  public $model = 'App\Models\Patient';

  public function states(){
    return State::select(DB::raw("concat(name,' - ',symbol) as label"),'id as value','symbol')->get();
  }
}
