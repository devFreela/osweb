<?php

namespace App\Http\Controllers;

use App\Models\OsDescritorDespesa;
use Illuminate\Http\Request;

class OsDescritorDespesaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $data = OsDescritorDespesa::all();
      return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $data = new OsDescritorDespesa;
      $data->ID_DESCRITOR_DESPESA = $request->ID_DESCRITOR_DESPESA;
      $data->DESCRICAO = $request->DESCRICAO;
      $data->save();
      return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OsDescritorDespesa  $OsDescritorDespesa
     * @return \Illuminate\Http\Response
     */
    public function show(OsDescritorDespesa $OsDescritorDespesa)
    {
      return $OsDescritorDespesa;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OsDescritorDespesa  $OsDescritorDespesa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OsDescritorDespesa $data)
    {
      $data->ID_DESCRITOR_DESPESA = $request->ID_DESCRITOR_DESPESA;
      $data->DESCRICAO = $request->DESCRICAO;
      $data->save();
      return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OsContratoDespesa  $osContratoDespesa
     * @return \Illuminate\Http\Response
     */
    public function destroy(OsDescritorDespesa $data)
    {
      $data->delete();
      return $data;
    }
}
