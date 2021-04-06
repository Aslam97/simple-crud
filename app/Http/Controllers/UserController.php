<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use App\Task;

class UserController extends Controller
{
    public function index()
    {
        $currentUser = auth()->user();
        return new UserResource($currentUser);
    }

    public function tasks()
    {
        $tasks = Task::where('assignee_id', auth()->id())->get();

        return TaskResource::collection($tasks);
    }
}
