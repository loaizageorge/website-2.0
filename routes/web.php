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
Route::get('', 'WebsiteController@loadWebsite');

Route::group([
        'prefix' => 'dashboard', 
        'middleware' => 'auth'
    ], function() {
        Route::get('projects', 'WebsiteController@loadProjectDashboard');
        Route::get('sections', 'WebsiteController@loadSectionDashboard');
    });

Auth::routes(['register' => false]);

Route::get('/home', 'HomeController@index')->name('home');
