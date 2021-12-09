<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsObservacao extends Model
{
    use HasFactory;

    protected $table = 'os_observacao';

    public function usuario()
    {
        return $this->belongsTo(User::class,'ID_USUARIO','ID_USUARIO');
    }
}
