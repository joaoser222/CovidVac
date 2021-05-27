<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;
use Hash;
class UsersController extends Controller
{
  use ControllerTrait;
  public $module = 'user';
  public $label = 'Usuários';
  public $model = 'App\Models\User';

  public function store(Request $request){
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('create');
    $record = $this->save($request);
    $record->password = Hash::make($request->password);
    $record->save();
    return $record;
  }

  public function update(Request $request,int $id)
  {
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('update');
    $record = $this->save($request,$id);
    if(isset($record->password)){
      $record->password = Hash::make($request->password);
      $record->save();
    }
    return $record;
  }
}
