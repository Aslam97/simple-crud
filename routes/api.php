<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function ($route) {

    $route->get('/user', [Controllers\UserController::class, 'index']);
    $route->get('/user/tasks', [Controllers\UserController::class, 'tasks']);

    $route->get('/statuses', [Controllers\StatusController::class, 'index']);

    $route->get('/assignees', [Controllers\AssigneeController::class, 'index']);

    $route->post('/tasks', [Controllers\TaskController::class, 'store']);
});
