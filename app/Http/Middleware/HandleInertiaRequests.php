<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = null;
        if (Auth::guard('admin')->user()) {
            $user = Auth::guard('admin')->user();
            $user['role'] = 'admin';
        }
        if (Auth::guard('employee')->user()) {
            $user = Auth::guard('employee')->user();
            $user['role'] = 'employee';
        }
        if (Auth::guard('web')->user()) {
            $user = Auth::guard('web')->user();
            $user['role'] = 'user';
        }
        // $user = Auth::guard('admin')->user() ?? Auth::guard('employee')->user() ?? Auth::guard('web')->user();
        // dd($user);


        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user
            ],
        ];
    }
}
