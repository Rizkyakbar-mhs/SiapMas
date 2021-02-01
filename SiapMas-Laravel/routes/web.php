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
Route::get('/register', 'Regis@index');
Route::get('/lupaPass', 'UserController@lupaPass');
Route::get('/Tambah-Obat', 'Obat@tambahobat');

Route::post('/login', 'UserController@login');
Route::post('/regis', 'Regis@regis');