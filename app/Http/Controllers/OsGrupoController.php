<?php

namespace App\Http\Controllers;

use App\Models\OsGrupo;
use Illuminate\Http\Request;

class OsGrupoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return OsGrupo::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $data = new OsGrupo;
      $data->NM_GRUPO = $request->NM_GRUPO;
      $data->DS_GRUPO = $request->DS_GRUPO;
      $data->save();
      return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OsGrupo  $osGrupo
     * @return \Illuminate\Http\Response
     */
    public function show(OsGrupo $osGrupo)
    {
      return $osGrupo;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OsGrupo  $osGrupo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OsGrupo $data)
    {
      $data->NM_GRUPO = $request->NM_GRUPO;
      $data->DS_GRUPO = $request->DS_GRUPO;
      $data->save();
      return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OsGrupo  $osGrupo
     * @return \Illuminate\Http\Response
     */
    public function destroy(OsGrupo $data)
    {
      $data->delete();
      return $data;
    }
}
