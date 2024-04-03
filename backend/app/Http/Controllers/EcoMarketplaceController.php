<?php

namespace App\Http\Controllers;

use App\Models\EcoMarketplace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EcoMarketplaceController extends Controller
{
    public function index()
    {
        $products = EcoMarketplace::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'product_name' => 'required|string',
            'description' => 'nullable|string',
            'category' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'seller_name' => 'required|string',
            'seller_location' => 'required|string',
            'seller_pincode' => 'required|string',
            'image' => 'nullable|string', // Assuming image URL is provided
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = EcoMarketplace::create($validator->validated());
        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = EcoMarketplace::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'product_name' => 'string',
            'description' => 'nullable|string',
            'category' => 'string',
            'price' => 'numeric',
            'quantity' => 'integer',
            'seller_name' => 'string',
            'seller_location' => 'string',
            'seller_pincode' => 'string',
            'image' => 'nullable|string', // Assuming image URL is provided
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $product = EcoMarketplace::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->update($validator->validated());
        return response()->json($product);
    }

    public function destroy($id)
    {
        $product = EcoMarketplace::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->delete();
        return response()->json(null, 204);
    }
}
