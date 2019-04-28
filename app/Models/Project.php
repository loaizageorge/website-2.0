<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    protected $fillable = ['name', 'order', 'image', 'source', 'demo', 'demo_text', 'description'];
    protected $attributes = [
        'name' => '',
        'order' => 0,
        'image' => '',
        'source' => '',
        'demo' => '',
        'demo_text' => '',
        'description' => '',
    ];
}
