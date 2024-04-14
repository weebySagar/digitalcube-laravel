<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Query;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Dashboard/Employee', [
            'employees' => Employee::all()
        ]);
    }
    public function register()
    {
        return Inertia::render('Auth/UserRegister');
    }

    public function login()
    {
        return Inertia::render('Auth/EmployeeLogin');
    }

    public function showQuery()
    {
        $query = Query::with(['user','employee'])->get();

        return Inertia::render('Employee/Dashboard', ['queries' => $query]);
    }
}
