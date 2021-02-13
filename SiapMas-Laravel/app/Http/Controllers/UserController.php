<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\UserModel;
use Session;

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
        $validator = $this->validate($request,[
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
                $request->session()->put('validasi', 'Password Salah');
                return redirect('/');
            }
        }else{
            $request->session()->put('validasi', 'Email Tidak Terdaftar');
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
        if ($profil->session()->has('email')) {
            $prof = $profil->session()->get('email');
            $userprofil = json_decode(UserModel::all()->where('email',$prof), true);
            return view('profil',['title' => 'SIAPMAS - PROFIL','userprofil' => $userprofil]);
        }else{

        }

    }

    public function signOut(Request $signout)
    {

        $signout->session()->flush();
        return redirect('/');

    }
}