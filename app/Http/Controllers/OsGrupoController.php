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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $data->NM_GRUPO = $request->NM_GRUPO;
      $data->DS_GRUPO = $request->DS_GRUPO;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OsGrupo  $osGrupo
     * @return \Illuminate\Http\Response
     */
    public function show(OsGrupo $osGrupo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OsGrupo  $osGrupo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OsGrupo $osGrupo)
    {
      $data->NM_GRUPO = $request->NM_GRUPO;
      $data->DS_GRUPO = $request->DS_GRUPO;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OsGrupo  $osGrupo
     * @return \Illuminate\Http\Response
     */
    public function destroy(OsGrupo $osGrupo)
    {
        //
    }
}
