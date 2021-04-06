<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function ($route) {

    $route->get('/user', [Controllers\UserController::class, 'index']);
});
