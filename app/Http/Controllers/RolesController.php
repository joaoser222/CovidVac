<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ControllerTrait;
use App\Models\Permission;
use DB;
class RolesController extends Controller
{
  use ControllerTrait;
  public $module = 'role';
  public $label = 'Funções';
  public $model = 'App\Models\Role';

  public function getPermissions($role_id = null){
    $model = new $this->model;
    $all = Permission::select('id','name','description')->get();
    $selected = [];
    if(!empty($role_id))
      $selected = $model->find($role_id)->Permissions()->select('permissions.id','name','description')->get();
    return response()->json([
      'all'=>$all,
      'selected'=>$selected
    ]);
  }

  public function store(Request $request){
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('create');
    $record = $this->save($request);
    $permissions = $request->permissions;
    $record->Permissions()->sync($permissions);
  }

  public function update(Request $request,int $id)
  {
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('update');
    $record = $this->save($request,$id);
    $permissions = $request->permissions;
    $record->Permissions()->sync($permissions);
  }

  public function destroy(Request $request)
  {
    $model = new $this->model;
    $this->checkPermission('delete');
    $model->whereIn('id',$request->items)->delete();
    DB::table('permission_role')->whereIn('role_id',$request->items)->delete();
    return response('',200);
  }


  
}
