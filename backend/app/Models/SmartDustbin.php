<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SmartDustbin extends Model
{
    public $timestamps = false; // Disable timestamps
    
    protected $fillable = [
        'name', 'location', 'pincode', 'latitude', 'longitude', 'status'
    ];

    protected $table = 'smart_dustbin';

    // Your model code here...
}
