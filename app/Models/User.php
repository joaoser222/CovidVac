<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\ModelTrait;

class User extends Authenticatable
{
    use Notifiable,ModelTrait;
    protected $fillable = [
      'name',
      'email',
      'password',
      'role_id'
    ];

    public $searchable = [
      'users.name',
      'email',
      'role.name'
    ];

    protected $hidden = [
      'password'
    ];

  /**
   * Adiciona campos no select para pesquisa
   *
   * @param Builder $query
   * @return Builder 
   * 
  */
  public function scopeFields($query)
  {
    return $query->addSelect(
      'users.*',
      'roles.name as role_name'
    )->leftJoin('roles','roles.id','=','users.role_id');
  } 

    public function getRules(){
      $request = request();
      $rules = [
        'name'=>'required',
        'email' => 'required|email|unique:users,email,'.$this->id.',id'
      ];
      // Verifica se o request possui os campos de senha
      if ($request->input('password') && $request->input('password_confirmation')) {
        $rules['password'] = 'min:8|max:60|same:password_confirmation';
        $rules['password_confirmation'] = 'required_with:password';
      }
      return $rules;
    }

    public function Role(){
      return $this->belongsTo('App\Models\Role');
    }

}
