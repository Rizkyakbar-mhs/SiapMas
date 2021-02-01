<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\UserModel;

class Regis extends Controller
{
    public function index()
    {
        return view('register',['title' => 'SIAPMAS - REGISTER']);
    }

    public function regis(Request $regis)
    {
        $registrasi = new UserModel;

        $registrasi->user_id = $regis->NIP;
        $registrasi->user_name = $regis->name;
        $registrasi->email = $regis->email;
        $registrasi->pass = $regis->password;
        $registrasi->user_dial = $regis->dial;
        $registrasi->user_address = $regis->address;
        $registrasi->save();
        
        return redirect('/');
    }
}