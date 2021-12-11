<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// api
Route::get('/api/samsung', [ApiController::class, 'api_samsung']);
Route::get('/api/apple', [ApiController::class, 'api_apple']);
Route::get('/api/huawei', [ApiController::class, 'api_huawei']);
Route::get('/api/oppo', [ApiController::class, 'api_oppo']);
Route::get('/api/xiaomi', [ApiController::class, 'api_xiaomi']);
Route::get('/api/clear', [ApiController::class, 'clear_api_cache']);

//page
Route::get('/', function(){
    return redirect('/search');
});
Route::get('/search', [PageController::class, 'view_search']);
Route::get('/compare', [PageController::class, 'view_compare']);
Route::get('/brands', [PageController::class, 'view_brands']);
Route::get('/latest', [PageController::class, 'view_latest']);
Route::get('/top-by-interest', [PageController::class, 'view_topByInterest']);
Route::get('/top-by-fans', [PageController::class, 'view_topByFans']);
Route::get('/charts', [PageController::class, 'view_charts']);