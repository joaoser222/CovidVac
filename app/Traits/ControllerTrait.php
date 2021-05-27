<?php

namespace App\Traits;

use Illuminate\Http\Request;
use DB;
use Auth;
trait ControllerTrait
{

  /**
   * Verifica se o usuário que está logado possui permissão
   * para executar a ação
   *
   * @param String $permission
   * 
  **/
  protected function checkPermission($permission){
    $user = Auth::user();
    $hasPermission = $user->role->Permissions()->where('name',$this->module.'_'.$permission)->first();
    if(empty($hasPermission)){
      return abort(403);
    }
  }

  /**
   * Lista registros e exibe um registro se um id for passado
   *
   * @param int $id
   * @param Request $request
   * @return mixed Array
   * 
  **/
  public function index(Request $request,$id = null)
  {
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('read');
    $search = $request->search;
    $data = [];

    $model = new $this->model;
    $query = $model->fields();
    if($id){
      $data = $model->findOrFail($id);
    }else{
      //Verifica se o request possui pesquisa;
      if(isset($search)){
        //Verifica se a model possui um attributo especifico de pesquisa, caso contrário 
        //utiliza os fillables da model
        $searchable = isset($model->searchable)? $model->searchable : $model->getFillable();
        $filters = array_map(function($filter)use($search,$searchable){
          return $filter." LIKE '%$search%'";
        },$searchable);

        $query = $query->whereRaw('('.implode(' OR ',$filters).')');
      }
      $data = $query->paginate(20);
    }
    
    return $data;
  }

  /**
   * Função de base para criação e atualização de registros
   *
   * @param int $id
   * @param Request $request
   * @return mixed Array
   * 
  **/
  public function save(Request $request,$id = null){
    return DB::transaction(function () use($request,$id){
      //Instaciando um modelo.
      $model = new $this->model;
      $fillable_fields = $model->getFillable();
      $attributes = array_filter($request->only($fillable_fields),function($item){
        return !is_null($item);
      });
      $record = [];

      // Persiste os dados no banco
      if(isset($id)){
        $record = $model->findOrFail($id);
        //Validação dos dados
        $request->validate($record->getRules());
        $record->fill($attributes);
        $record->save();
      }else{
        //Validação dos dados
        $request->validate($model->getRules());
        $record = $model->create($attributes);
      }

      return $record;
    });
  }


  /**
   * Cria um novo registro
   *
   * @param int $id
   * @param Request $request
   * @return mixed Array
   * 
  **/
  public function store(Request $request){
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('create');
    return $this->save($request);
  }

  /**
   * Atualiza o registro
   *
   * @param int $id
   * @param Request $request
   * @return mixed Array
   * 
  **/
  public function update(Request $request,int $id)
  {
    // Verifica se o usuário pode realizar a ação.
    $this->checkPermission('update');
    return $this->save($request,$id);
  }

  /**
   * Deleta registros mediante um array de ids passados
   *
   * @param Request $request
   * @return Illuminate\Http\Response
  **/
  public function destroy(Request $request)
  {
    $model = new $this->model;
    $this->checkPermission('delete');
    $model->whereIn('id',$request->items)->delete();
    return response('',200);
  }
}
