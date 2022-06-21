<?php

use App\Http\Controllers\AsignaturaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SemestreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// dashboard route
Route::get('/dashboard', [DashboardController::class, 'index']);
// pages routes
Route::resource('asignatura', AsignaturaController::class);
Route::resource('semestre', SemestreController::class);
Route::post('/option/value', [AsignaturaController::class, 'option']);