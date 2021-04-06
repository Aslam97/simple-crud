<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\TaskResource;
use App\Task;

class TaskController extends Controller
{
    public function store(StoreTaskRequest $request)
    {
        $validatedData = $request->validated();

        $task = Task::create(array_merge($validatedData, ['user_id' => auth()->id()]));

        return (new TaskResource($task))->additional([
            'message' => 'Task created!',
        ]);
    }
}
