<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware extends Middleware
{
  public function handle(Request $request, Closure $next)
  {
    if (Auth::guard('admin')->check()) {
      return $next($request);
    }

    return redirect('/');
  }
}
