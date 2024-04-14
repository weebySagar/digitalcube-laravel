<?php

namespace App\Http\Controllers;

use App\Models\Query;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index()
    {
        $queries = Query::with(['user','employee'])->get();

        return Inertia::render("Dashboard/Dashboard",["queries"=> $queries]);
    }
}
