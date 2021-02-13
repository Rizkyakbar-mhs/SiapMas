<?php

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
Route::get('/', 'UserController@index');
Route::get('/dashboard', 'UserController@dashboard');
Route::get('/register', 'Register@index');
Route::get('/lupaPass', 'UserController@lupaPass');
Route::get('/dataUser', 'UserController@dataUser');
Route::get('/tambahObat', 'DrugController@tambahObat');
Route::get('/tambahObatManual', 'DrugController@tambahObatManual');
Route::get('/dataObat', 'DrugController@dataObat');
Route::get('/signOut', 'UserController@signOut');
Route::get('/profil', 'UserController@profil');
Route::get('/ourteam', 'DashboardController@ourteam');

Route::post('/login', 'UserController@login');
Route::post('/register', 'Register@register');
Route::post('/tambahManual', 'DrugController@tambahManual');