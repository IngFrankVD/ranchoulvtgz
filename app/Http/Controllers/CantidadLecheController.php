<?php

namespace App\Http\Controllers;

use App\Models\cantidadLeche;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CantidadLecheController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Leche/registroLeche', [
            'cantidadLeche' =>cantidadLeche::with('user:id,name')->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(cantidadLeche $cantidadLeche)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(cantidadLeche $cantidadLeche)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, cantidadLeche $cantidadLeche)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(cantidadLeche $cantidadLeche)
    {
        //
    }
}
