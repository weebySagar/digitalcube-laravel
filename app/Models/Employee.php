<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;


class Employee extends Authenticatable
{
    use HasFactory,Notifiable;


     protected $fillable = [
        'username',
        'password',
        'department'
    ];

    protected $hidden = [
        'password',
    ];

}
