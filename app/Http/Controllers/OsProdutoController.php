<?php

namespace App\Http\Controllers;

use App\Models\OsProduto;
use Illuminate\Http\Request;

class OsProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      return OsProduto::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $data = new OsProduto;
      $data->ID_PRODUTO = $request->ID_PRODUTO;
      $data->NM_PRODUTO = $request->NM_PRODUTO;
      $data->DM_ATIVO = $request->DM_ATIVO;
      $data->save();
      return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OsProduto  $osProduto
     * @return \Illuminate\Http\Response
     */
    public function show(OsProduto $osProduto)
    {
      return $osProduto;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OsProduto  $osProduto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OsProduto $data)
    {
      $data->ID_PRODUTO = $request->ID_PRODUTO;
      $data->NM_PRODUTO = $request->NM_PRODUTO;
      $data->DM_ATIVO = $request->DM_ATIVO;
      $data->save();
      return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OsProduto  $osProduto
     * @return \Illuminate\Http\Response
     */
    public function destroy(OsProduto $data)
    {
      $data->delete();
      return $data;
    }
}
