<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Permission;
use App\Models\Role;
use Hash;
use Carbon\Carbon;
class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //Cria a Função de Administrador
      $role = Role::create([
        'name'=>'Administrador',
        'description'=>'Administrador do sistema, possui plenos poderes',
      ]);

      //Cria o usuário Administrador
      $user = User::create([
        'name'=>'Administrador',
        'email'=>'admin@admin',
        'password'=>Hash::make('12345678'),
        'role_id'=>$role->id
      ]);
      
      //Adiciona à Função de administrador todas as permissões
      $permissions = Permission::all()->pluck('id');
      foreach($permissions as $permission){
        $role->permissions()->attach([$permission=>['created_at'=>Carbon::now()->format('Y-m-d H:i:s')]]);
      }
    }
}
