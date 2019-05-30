<?php

use Illuminate\Http\Request;

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
Route::post('add-section', 'WebsiteController@addSection');
Route::post('send-message', 'WebsiteController@sendMessage');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'projects'], function(){
    Route::post('/', 'ProjectController@create');
    Route::get('/{id}', 'ProjectController@get');
    Route::post('/{id}', 'ProjectController@update');
});
