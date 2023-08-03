<?php

use App\Http\Controllers\AlbumsController;
use App\Http\Controllers\BandsController;
use App\Http\Controllers\ConcertsController;
use App\Http\Controllers\GenresController;
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

// controller resource
Route::resource('bands', BandsController::class);
Route::put('bands/{id}', [BandsController::class, 'update']);

Route::resource('albums', AlbumsController::class);
Route::put('albums/{id}', [AlbumsController::class, 'update']);

Route::resource('concerts', ConcertsController::class);
Route::put('concerts/{id}', [ConcertsController::class, 'update']);

Route::resource('genres', GenresController::class);
Route::put('genres/{id}', [GenresController::class, 'update']);

