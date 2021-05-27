<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PermissionsController extends Controller
{
  public $module = 'permission';
  public $label = 'Permissões';
  public $model = 'App\Models\Permission';
}
