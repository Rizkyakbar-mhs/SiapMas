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
        return view('lupapass',['title' => 'SIAPMAS - LUPA PASSWORD']);
    }
    
    public function login(Request $request)
    {
        $email = UserModel::all()->where('email',$request->email);
        $pass = UserModel::all()->where('pass',$request->password);

        if (count($email) === 1 ) {        
            if (count($pass) === 1 ) {
                $request->session()->put('email',$request->email);
                return redirect('/dashboard')->with('status', 'Password Login Berhasil');
            }else{
                return redirect('/')->with('status', 'Password Salah');
            }
        }else{
            return redirect('/')->with('status', 'Email Tidak Terdaftar');
        }
    }
    
    public function register()
    {
        if (Session::has('email')) {
            return view('register',['title' => 'SIAPMAS - REGISTER']);
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        }        
    }

    public function dashboard(Request $session)
    {
        if (Session::has('email')) {
            $sess = $session->session()->get('email');
            $user = json_decode(UserModel::select('user_name')->where('email',$sess)->get(), true);
            
            foreach($user as $data) {
            return view('dashboard',['title' => 'SIAPMAS - DASHBOARD','session' => $data['user_name']]);
            }
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        }        
        
    }
    
    public function dataUser()
    {
        if (Session::has('email')) {
            $drugData = UserModel::all();
            return view('datauser',['title' => 'SIAPMAS - Data User', 'drugData' => $drugData]);
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        }        
    }
    
    public function profil(Request $profil)
    {
        if ($profil->session()->has('email')) {
            $prof = $profil->session()->get('email');
            $userprofil = json_decode(UserModel::all()->where('email',$prof), true);
            return view('profil',['title' => 'SIAPMAS - PROFIL','userprofil' => $userprofil]);
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        }

    }

    public function signOut(Request $signout)
    {

        $signout->session()->flush();
        return redirect('/');

    }
}