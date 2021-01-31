<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\UserModel;

class UserController extends Controller
{
    public function index()
    {
        return view('welcome',['title' => 'SIAPMAS - LOGIN']);
    }
    
    public function login(Request $request)
    {
        $this->validate($request,[
            'email' => 'required',
            'password' => 'required'
        ]);

        $email = UserModel::all()->where('email',$request->email);
        $pass = UserModel::all()->where('pass',$request->password);
        
        if (count($email) === 1 ) {        
            if (count($pass) === 1 ) {
                $request->session()->regenerate();
                return redirect('/dashboard');
            }else{
                return redirect('/');
            }
        }else{
        return redirect('/');
        }
    }
    
    public function register()
    {
        return view('register',['title' => 'SIAPMAS - REGISTER']);
    }
}