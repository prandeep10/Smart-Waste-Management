<?php

namespace App\Http\Controllers;

use App\Models\SmartDustbin;
use Illuminate\Http\Request;

class SmartDustbinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $smartDustbins = SmartDustbin::all();
        return response()->json($smartDustbins);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'pincode' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'status' => 'required|string',
        ]);

        $smartDustbin = SmartDustbin::create($data);
        return response()->json($smartDustbin, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $smartDustbin = SmartDustbin::findOrFail($id);
        return response()->json($smartDustbin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'name' => 'string',
            'location' => 'string',
            'pincode' => 'string',
            'latitude' => 'numeric',
            'longitude' => 'numeric',
            'status' => 'string',
        ]);

        $smartDustbin = SmartDustbin::findOrFail($id);
        $smartDustbin->update($data);
        return response()->json($smartDustbin);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $smartDustbin = SmartDustbin::findOrFail($id);
        $smartDustbin->delete();
        return response()->json(null, 204);
    }
}
