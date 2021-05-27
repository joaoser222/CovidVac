<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class HomeController extends Controller
{
  public function index(){
    //Retorna o template do Vue;
    return file_get_contents(public_path().'/index.html');
  }

  public function login(Request $request){
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
      $request->session()->regenerate();
      return response('',200);
    }
    return response(['error'=>'Login inválido'],422);
  }

  public function logout(){
    Auth::logout();
    return redirect('/');
  }

  public function menus(){
    $user = Auth::user();
    return $user->role->Permissions()->select('name')->where('name','like','%_read%')->get()->pluck('name');
  }
}
