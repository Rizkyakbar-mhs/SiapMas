<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DrugModel;

class DrugController extends Controller
{
    public function tambahObat()
    {
        return view('tambahobat',['title' => 'SIAPMAS - Tambah Obat']);
    }

    public function tambahObatManual()
    {
        return view('TambahObat.manual',['title' => 'SIAPMAS - Tambah Obat Manual']);
    }

    public function dataObat()
    {
        $drugData = DrugModel::all();
        return view('dataobat',['title' => 'SIAPMAS - Data Obat', 'drugData' => $drugData]);
    }

    public function tambahManual(Request $manual)
    {
        $tambahmanual = new DrugModel;

        $tambahmanual->drug_id = $manual->drug_id;
        $tambahmanual->drug_name = $manual->drug_name;
        $tambahmanual->price = $manual->price;
        $tambahmanual->qty = $manual->qty;
        $tambahmanual->exp_date = $manual->exp_date;
        $tambahmanual->save();
        
        return redirect('/dataObat');
    }
}
