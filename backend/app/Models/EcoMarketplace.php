<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EcoMarketplace extends Model
{
    protected $table = 'eco_marketplace';

    protected $fillable = [
        'product_name',
        'description',
        'category',
        'price',
        'quantity',
        'seller_name',
        'seller_location',
        'seller_pincode',
        'image',
    ];

}
