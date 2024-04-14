<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function adminLogin(Request $request)
    {
        $credentials = $request->only('username', 'password');

        // if (!Auth::guard('admin')->check()) {
        //     dd(Auth::guard('admin')->user()); // Add a specific error message here
        // }
        // dd(Auth::guard('admin')->attempt($credentials));
        if (Auth::guard('admin')->attempt($credentials)) {
            
            return redirect()->route('dashboard');
        }

        return back()->withErrors(['username' => 'Invalid credentials']);
    }

    public function employeeLogin(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (Auth::guard('employee')->attempt($credentials)) {
            return redirect()->route('employee.dashboard');
        }

        return back()->withErrors(['username' => 'Invalid credentials']);
    }

    public function userLogin(Request $request)
    {
        $credentials = $request->only('username', 'password');
        // dd("inside user login");
        if (Auth::guard('web')->attempt($credentials)) {
            return redirect()->route('query');
        }

        return back()->withErrors(['username' => 'Invalid credentials']);
    }
}
