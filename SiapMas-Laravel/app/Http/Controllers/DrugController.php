<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DrugModel;

class DrugController extends Controller
{
    public function tambahObat()
    {
        if (Session::has('email')) {
            return view('tambahobat',['title' => 'SIAPMAS - Tambah Obat']);
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        } 
    }

    public function tambahObatManual()
    {
        if (Session::has('email')) {
            return view('TambahObat.manual',['title' => 'SIAPMAS - Tambah Obat Manual']);
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        } 
    }

    public function dataObat()
    {
        if (Session::has('email')) {
            $drugData = DrugModel::all();
            return view('dataobat',['title' => 'SIAPMAS - Data Obat', 'drugData' => $drugData]);
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        } 
    }

    public function tambahManual(Request $manual)
    {
        if (Session::has('email')) {
            $tambahmanual = new DrugModel;
            $tambahmanual->drug_id = $manual->drug_id;
            $tambahmanual->drug_name = $manual->drug_name;
            $tambahmanual->price = $manual->price;
            $tambahmanual->qty = $manual->qty;
            $tambahmanual->exp_date = $manual->exp_date;
            $tambahmanual->save();
            
            return redirect('/dataObat');
        }else{
            return redirect('/')->with('status', 'Harap Login Terlebih Dahulu');
        } 
    }
}
