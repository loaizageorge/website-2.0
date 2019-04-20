<?php
use App\Http\Controllers\WebsiteController;
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

Route::get('/', 'WebsiteController@index');
Route::get('/dashboard', 'WebsiteController@loadDashboard');
Route::post('/api/add-section', 'WebsiteController@addSection');

