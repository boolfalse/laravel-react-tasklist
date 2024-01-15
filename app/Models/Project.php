<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';
    public $timestamps = false;
    protected $fillable = [
        'id', // primary key, auto-increment, integer
        'name', // string
    ];

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }
}
