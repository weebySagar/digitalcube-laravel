<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmployeeMiddleware extends Middleware
{
  public function handle(Request $request, Closure $next)
  {
    if (Auth::guard('employee')->check()) {
      return $next($request);
    }

    return redirect('/');
  }
}
