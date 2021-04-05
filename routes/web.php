<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('{any}', 'AppController')->where('any', '.*');
