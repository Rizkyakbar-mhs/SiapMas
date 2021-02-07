<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DrugModel;

class DrugController extends Controller
{
    public function index()
    {
        // return view('welcome',['title' => 'SIAPMAS - LOGIN']);
    }

    public function tambahobat()
    {
        return view('Obat',['title' => 'SIAPMAS - Tambah Obat']);
    }

    public function dataobat()
    {
        $drugData = DrugModel::all();
        return view('dataobat',['title' => 'SIAPMAS - Data Obat', 'drugData' => $drugData]);
    }
}
