<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    
    public function index(){
        return Inertia::render('Dashboard/User',[
            'users'=>User::all()
        ]);
    }
     public function register()
    {
        return Inertia::render('Auth/UserRegister');
    }

    public function login(){
     return Inertia::render('Auth/UserLogin');

    }
}
