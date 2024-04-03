<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SmartDustbinController;
use App\Http\Controllers\RecycleCenterController;
use App\Http\Controllers\EcoMarketplaceController;
use App\Http\Controllers\EcoCollectController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function () {
    return view('welcome');
});

// Smart Dustbin 
Route::get('smart-dustbins', [SmartDustbinController::class, 'index']);
Route::post('smart-dustbins', [SmartDustbinController::class, 'store']);
Route::get('smart-dustbins/{id}', [SmartDustbinController::class, 'show']);
Route::put('smart-dustbins/{id}', [SmartDustbinController::class, 'update']);
Route::delete('smart-dustbins/{id}', [SmartDustbinController::class, 'destroy']);

// Get all recycle centers
Route::get('recycle-centers', [RecycleCenterController::class, 'index']);
Route::post('recycle-centers', [RecycleCenterController::class, 'store']);
Route::get('recycle-centers/{id}', [RecycleCenterController::class, 'show']);
Route::put('recycle-centers/{id}', [RecycleCenterController::class, 'update']);
Route::delete('recycle-centers/{id}', [RecycleCenterController::class, 'destroy']);


// marketplace 
Route::get('eco-marketplace', [EcoMarketplaceController::class, 'index']);
Route::post('eco-marketplace', [EcoMarketplaceController::class, 'store']);
Route::get('eco-marketplace/{id}', [EcoMarketplaceController::class, 'show']);
Route::put('eco-marketplace/{id}', [EcoMarketplaceController::class, 'update']);
Route::delete('eco-marketplace/{id}', [EcoMarketplaceController::class, 'destroy']);

// eco-collect
Route::get('eco-collects', [EcoCollectController::class, 'index']);
Route::post('eco-collects', [EcoCollectController::class, 'store']);
Route::get('eco-collects/{id}', [EcoCollectController::class, 'show']);
Route::put('eco-collects/{id}', [EcoCollectController::class, 'update']);
Route::delete('eco-collects/{id}', [EcoCollectController::class, 'destroy']);