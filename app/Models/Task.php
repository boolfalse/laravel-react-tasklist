<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'tasks';
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'project_id', // foreign key, integer

        'priority', // integer
        'title', // string
        'description', // text
    ];
    protected $appends = [
        'created',
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function getCreatedAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
