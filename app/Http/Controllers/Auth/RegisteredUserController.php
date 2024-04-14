<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Employee;
use App\Models\User;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use PhpParser\Node\Stmt\TryCatch;

use function PHPSTORM_META\type;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {

        try {
            //code...

            if ($request->type === 'admin') {

                $request->validate([
                    'username' => 'required|string|max:255|unique:' . Admin::class,
                    'password' => ['required', 'confirmed', Rules\Password::defaults()],
                ]);

                $admin = Admin::create([
                    'username' => $request->email,
                    'password' => Hash::make($request->password),
                ]);

                event(new Registered($admin));

                Auth::login($admin);
            } else if ($request->type === 'employee') {
                // dd('inside employee');
                $request->validate([
                    'username' => 'required|string|max:255|unique:' . Employee::class,
                    'password' => ['required'],
                    'department'=>'required|string'
                ]);

                
               

                $employee = Employee::create([
                    'username' => $request->username,
                    'password' => Hash::make($request->password),
                    'department'=>$request->department
                ]);
                // dd($employee);

                event(new Registered($employee));
                
                // return response()->json([
                //     'employee' => $employee,
                // ]);
            } else {

                $request->validate([
                    'username' => 'required|string|max:255|unique:' . Employee::class,
                    'password' => ['required', Rules\Password::defaults()],
                    'gender' => 'required|string',
                    'dob' => 'required',
                ]);

               
                $user = User::create([
                    'username' => $request->username,
                    'password' => Hash::make($request->password),
                    'gender' => $request->gender,
                    'dob' => $request->dob,
                ]);

                event(new Registered($user));

                Auth::login($user);
                return redirect(route('query', absolute: false));
            }
        } catch (\Exception $e) {
            //throw $th;
            // dd($e->getCode());
            return back()->withErrors(['username' => 'Username already taken , try another']);

        }
    }
}
