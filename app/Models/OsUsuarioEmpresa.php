<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsUsuarioEmpresa extends Model
{
    use HasFactory;

    protected $table = 'os_usuario_empresa';

    public $timestamps = false;
}
