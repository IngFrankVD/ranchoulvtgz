<?php

namespace App\Http\Controllers;

use App\Models\LecheRegistros;
use App\Models\cantidadLeche;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LecheRegistrosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Leche/registroLeche', [
            'LecheRegistros' => LecheRegistros::with('user:id,name')->latest()->get(),
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
        // Validar los datos
        $validate =  $request->validate([
            'litros' => 'required|max:100',
            'desc' => 'required|string|max:255'
        ]);

        $request->user()->lecheRegistros()->create($validate);

        return redirect(route('home.index'));
    }
    public function update(Request $request, LecheRegistros $lecheRegistros)
    {
       

        $validate =  $request->validate([
            'litros' => 'required|string|max:100',
            'desc' => 'required|string|max:255'
        ]);

        $lecheRegistros->update($validate);

        return redirect(route('home.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LecheRegistros $lecheRegistros)
    {
        //
    }
}
