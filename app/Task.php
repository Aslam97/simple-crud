<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'user_id', 'assignee_id', 'title', 'description', 'due_date',
    ];

    protected $casts = [
        'due_date' => 'datetime',
    ];

    public function statuses()
    {
        return $this->belongsToMany(Status::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assignee_id');
    }
}
