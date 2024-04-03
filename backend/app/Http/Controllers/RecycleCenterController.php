<?php

namespace App\Http\Controllers;

use App\Models\RecycleCenter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RecycleCenterController extends Controller
{
    public function index()
    {
        $recycleCenters = RecycleCenter::all();
        return response()->json($recycleCenters);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'location' => 'required|string',
            'pincode' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'category' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $recycleCenter = RecycleCenter::create($validator->validated());
        return response()->json($recycleCenter, 201);
    }

    public function show($id)
    {
        $recycleCenter = RecycleCenter::find($id);
        
        if (!$recycleCenter) {
            return response()->json(['message' => 'Recycle center not found'], 404);
        }

        return response()->json($recycleCenter);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'location' => 'string',
            'pincode' => 'string',
            'latitude' => 'numeric',
            'longitude' => 'numeric',
            'category' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $recycleCenter = RecycleCenter::find($id);
        
        if (!$recycleCenter) {
            return response()->json(['message' => 'Recycle center not found'], 404);
        }

        $recycleCenter->update($validator->validated());
        return response()->json($recycleCenter);
    }

    public function destroy($id)
    {
        $recycleCenter = RecycleCenter::find($id);

        if (!$recycleCenter) {
            return response()->json(['message' => 'Recycle center not found'], 404);
        }

        $recycleCenter->delete();
        return response()->json(null, 204);
    }
}
