<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsAssunto extends Model
{
    use HasFactory;

    protected $table = 'os_assunto';

    public $timestamps = false;

    public function produto()
    {
        return $this->hasOne(OsProduto::class, 'ID_PRODUTO', 'ID_PRODUTO');
    }
}
