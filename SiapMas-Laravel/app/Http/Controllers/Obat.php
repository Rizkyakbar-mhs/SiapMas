<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Obat extends Controller
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
        return view('dataobat',['title' => 'SIAPMAS - Data Obat']);
    }
}
