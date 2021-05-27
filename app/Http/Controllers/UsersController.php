<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;
class UsersController extends Controller
{
  use ControllerTrait;
  public $module = 'user';
  public $label = 'Usuários';
  public $model = 'App\Models\User';
}
