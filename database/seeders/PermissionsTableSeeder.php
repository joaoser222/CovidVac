<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Permission;
class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //Gera os menus de acordo com as models
      $files = scandir(base_path().'/app/Http/Controllers/');
      //Lista de ações e suas respectivas descrições
      $actions = [
        [
          'label'=>'Ver',
          'name'=>'read'
        ],
        [
          'label'=>'Criar',
          'name'=>'create'
        ],
        [
          'label'=>'Atualizar',
          'name'=>'update'
        ],
        [
          'label'=>'Excluir',
          'name'=>'delete'
        ]
      ];

      // Limpa a tabela de permissões antes de inserir;
      Permission::truncate();

      //Insere permissoes de acordo com controllers que possuem os atributos module e label,
      //referente a permissões.
      foreach($files as $file){
        if(strpos($file,'.php')){
          $className = '\App\Http\Controllers\\'.str_replace('.php','',$file);
          $controller = new $className;
          if(isset($controller->module) && isset($controller->label)){
            $permissions = array_map(function($action)use($controller){
              Permission::create([
                'name'=>$controller->module.'_'.$action['name'],
                'description'=>$action['label'].' '.$controller->label
              ]);
            },$actions);
          }
        }
      }
    }
}
