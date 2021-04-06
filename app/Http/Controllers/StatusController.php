<?php

namespace App\Http\Controllers;

use App\Http\Resources\StatusResource;
use App\Status;

class StatusController extends Controller
{
    public function index()
    {
        $statuses = Status::all();
        return StatusResource::collection($statuses);
    }
}
