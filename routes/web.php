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

Route::group([
        'prefix' => 'dashboard', 
        'middleware' => 'auth'
    ], function() {
        //Route::get('/dashboard', 'WebsiteController@loadDashboard');
        Route::get('project', 'WebsiteController@loadProjectDashboard');
        Route::get('sections', 'SectionController@loadDashboard');
    });



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
