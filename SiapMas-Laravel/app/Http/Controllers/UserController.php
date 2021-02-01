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
                $request->session()->put('email',$request->email);
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
    public function dashboard(Request $session)
    {
        $sess = $session->session()->get('email');
        $user = json_decode(UserModel::select('user_name')->where('email',$sess)->get(), true);
        
        foreach($user as $data) {
        return view('dashboard',['title' => 'SIAPMAS - DASHBOARD','session' => $data['user_name']]);
        }
    }
}