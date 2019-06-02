<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $table = 'sections';
    protected $fillable = ['name', 'order'];
    protected $attributes = [
        'name' => '',
        'order' => 0,
    ];
    
    public function projects()
    {
        return $this->hasMany('App\Models\Project');
    }
}
