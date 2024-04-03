<?php

namespace App\Http\Controllers;

use App\Models\EcoCollect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EcoCollectController extends Controller
{
    public function index()
    {
        $ecoCollects = EcoCollect::all();
        return response()->json($ecoCollects);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|string',
            'latitude' => 'required|string',
            'longitude' => 'required|string',
            'category' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $ecoCollect = EcoCollect::create($validator->validated());
        return response()->json($ecoCollect, 201);
    }

    public function show($id)
    {
        $ecoCollect = EcoCollect::find($id);

        if (!$ecoCollect) {
            return response()->json(['message' => 'Eco collect not found'], 404);
        }

        return response()->json($ecoCollect);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'string',
            'latitude' => 'string',
            'longitude' => 'string',
            'category' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $ecoCollect = EcoCollect::find($id);

        if (!$ecoCollect) {
            return response()->json(['message' => 'Eco collect not found'], 404);
        }

        $ecoCollect->update($validator->validated());
        return response()->json($ecoCollect);
    }

    public function destroy($id)
    {
        $ecoCollect = EcoCollect::find($id);

        if (!$ecoCollect) {
            return response()->json(['message' => 'Eco collect not found'], 404);
        }

        $ecoCollect->delete();
        return response()->json(null, 204);
    }
}
