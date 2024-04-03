<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EcoCollect extends Model
{
    protected $table = 'eco_collects';

    protected $fillable = [
        'image',
        'latitude',
        'longitude',
        'category',
    ];

    // Additional model code...
}