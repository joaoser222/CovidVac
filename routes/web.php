<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}','HomeController@index')->where('any', '^(?!api|login).*$')->middleware('auth');
Route::get('/login','HomeController@index');
Route::prefix('api')->group(function () {
  Route::post('/login','HomeController@login');
  Route::get('/logout','HomeController@logout');

  Route::group(['prefix'=>'admin','middleware'=>'auth'],function () {
    Route::prefix('users')->group(function () {
      Route::post('/store','UsersController@store');
      Route::post('/update/{id}','UsersController@update');
      Route::delete('/delete','UsersController@destroy');
      Route::get('/{id?}','UsersController@index');
    });

    Route::prefix('patients')->group(function () {
      Route::post('/store','PatientsController@store');
      Route::post('/update/{id}','PatientsController@update');
      Route::delete('/delete','PatientsController@destroy');
      Route::get('/states','PatientsController@states');
      Route::get('/{id?}','PatientsController@index');
    });

    Route::prefix('patient-vaccinations')->group(function () {
      Route::post('/store','PatientVaccinationsController@store');
      Route::post('/update/{id}','PatientVaccinationsController@update');
      Route::delete('/delete','PatientVaccinationsController@destroy');
      Route::post('history','PatientVaccinationsController@history');
      Route::get('stocks/{vendor_id}','PatientVaccinationsController@getStocks');
      Route::get('/{id?}','PatientVaccinationsController@index');
    });

    Route::prefix('roles')->group(function () {
      Route::post('/store','RolesController@store');
      Route::post('/update/{id}','RolesController@update');
      Route::delete('/delete','RolesController@destroy');
      Route::get('/permissions/{role_id?}','RolesController@getPermissions');
      Route::get('/{id?}','RolesController@index');
    });

    Route::prefix('vaccines')->group(function () {
      Route::post('/store','VaccinesController@store');
      Route::post('/update/{id}','VaccinesController@update');
      Route::delete('/delete','VaccinesController@destroy');
      Route::get('/{id?}','VaccinesController@index');
    });

    Route::prefix('vaccine-stocks')->group(function () {
      Route::post('/store','VaccineStocksController@store');
      Route::post('/update/{id}','VaccineStocksController@update');
      Route::delete('/delete','VaccineStocksController@destroy');
      Route::get('/{id?}','VaccineStocksController@index');
    });

    Route::prefix('vendors')->group(function () {
      Route::post('/store','VendorsController@store');
      Route::post('/update/{id}','VendorsController@update');
      Route::delete('/delete','VendorsController@destroy');
      Route::get('/{id?}','VendorsController@index');
    });

  });
});
