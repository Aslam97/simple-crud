<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;

class AssigneeController extends Controller
{
    public function index(Request $request)
    {
        $assignees = User::query()
            ->when(
                $request->user()->hasRole('supervisor'),
                function ($query) {
                    $query->whereHas('roles', $this->userRole('employee'));
                }
            )
            ->when($request->user()->hasRole('employee'), function ($query) {
                $query->where('id', auth()->id());
            })
            ->get();

        return UserResource::collection($assignees);
    }

    public function userRole($name)
    {
        return function ($query) use ($name) {
            $query->where('name', $name);
        };
    }
}
