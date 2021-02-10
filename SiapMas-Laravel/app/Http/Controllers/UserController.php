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
        return view('main',['title' => 'SIAPMAS - LOGIN']);
    }
    
    public function lupaPass()
    {
        return view('lupapass',['title' => 'SIAPMAS - LOGIN']);
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

    public function dataUser()
    {
        $drugData = UserModel::all();
        return view('datauser',['title' => 'SIAPMAS - Data User', 'drugData' => $drugData]);
    }

    public function profil(Request $profil)
    {

        $prof = $profil->session()->get('email');
        $userprofil = json_decode(UserModel::all()->where('email',$prof), true);
        
        return view('profil',['title' => 'SIAPMAS - PROFIL','userprofil' => $userprofil]);

    }

    public function signOut(Request $signout)
    {

        $signout->session()->flush();
        return redirect('/');

    }
}