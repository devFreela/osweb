<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsDespesa extends Model
{
    use HasFactory;

    protected $table = 'os_despesa';

    public $timestamps = false;
}
