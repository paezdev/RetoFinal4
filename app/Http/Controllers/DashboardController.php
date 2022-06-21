<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Siswa;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        //TODO Corregir modelos 
        $siswa = Siswa::count();
        $kelas = Kelas::count();
        return response()->json(compact('siswa', 'kelas'));
    }
}