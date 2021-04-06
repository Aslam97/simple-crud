<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function index()
    {
        $currentUser = auth()->user();
        return new UserResource($currentUser);
    }
}
