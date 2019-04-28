<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'projects';
    protected $fillable = ['name', 'section_id', 'order', 'image', 'source', 'demo', 'demo_text', 'description'];
    protected $attributes = [
        'name' => '',
        'section_id' => 0,
        'order' => 0,
        'image' => '',
        'source' => '',
        'demo' => '',
        'demo_text' => '',
        'description' => '',
    ];
}
