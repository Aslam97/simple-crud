<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Task;
use Illuminate\Http\JsonResponse;

class TaskController extends Controller
{
    /**
     * Get edit task by id
     *
     * @param  mixed $id
     * @return \App\Http\Resources\TaskResource
     */
    public function edit($id)
    {
        $task = Task::findOrFail($id);
        return new TaskResource($task);
    }

    /**
     * Update task
     *
     * @param  \App\Http\Requests\UpdateTaskRequest $request
     * @param  int $id
     * @return \App\Http\Resources\TaskResource
     */
    public function update(UpdateTaskRequest $request, $id)
    {
        $validatedData = $request->validated();

        $task = Task::findOrFail($id);
        $task->update($validatedData);

        return new TaskResource($task);
    }

    /**
     * Create Task
     *
     * @param  \App\Http\Requests\StoreTaskRequest $request
     * @return \App\Http\Resources\TaskResource
     */
    public function store(StoreTaskRequest $request)
    {
        $validatedData = $request->validated();

        $task = Task::create(array_merge($validatedData, ['user_id' => auth()->id()]));

        return (new TaskResource($task))->additional([
            'message' => 'Task created!',
        ]);
    }

    /**
     * Delete task
     *
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return new JsonResponse(['message' => 'Task deleted!']);
    }
}
