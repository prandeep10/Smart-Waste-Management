<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecycleCenter extends Model
{
    protected $fillable = [
        'name', 'location', 'pincode', 'latitude', 'longitude', 'category'
    ];

}
