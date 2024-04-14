<?php

use App\Http\Controllers\AdminController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QueryController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\EmployeeMiddleware;
use App\Models\Admin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::redirect('/','/admin/login');


Route::get('/dashboard',[DashboardController::class,'index'])->middleware(AdminMiddleware::class)->name('dashboard');
Route::get('/users',[UserController::class,'index'])->middleware(AdminMiddleware::class)->name('users');
Route::get('/employees',[EmployeeController::class,'index'])->middleware(AdminMiddleware::class)->name('employees');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



// Route::get('/dashboard',function(){
//     return Inertia::render('Dashboard');
// })->name('dashboard');



Route::get('/admin/login',[AdminController::class,'index'])->name('admin.login');
Route::post('/admin/login',[LoginController::class,'adminLogin'])->name('admin.login');



Route::get('/user/login',[UserController::class,'login'])->name('user.login');
Route::post('/user/login',[LoginController::class,'userLogin'])->name('user.login');
Route::get('/user/register',[UserController::class,'register'])->name('user.register');
Route::post('/user/register',[RegisteredUserController::class,'store'])->name('user.store');


Route::get('/employee/login',[EmployeeController::class,'login'])->name('employee.login');
Route::post('/employee/login',[LoginController::class,'employeeLogin'])->name('employee.login');
Route::get('/employee/register',[EmployeeController::class,'register'])->name('employee.register');
Route::post('/employee/register',[RegisteredUserController::class,'store'])->name('employee.register');
Route::get('/employee/dashboard',[EmployeeController::class,'showQuery'])->middleware(EmployeeMiddleware::class)->name('employee.dashboard');


Route::resource('query',QueryController::class)->name('index','query');



// Route::get('/dashboard/users',[Dashboard::class,'index'])->name('dashboard');


require __DIR__.'/auth.php';
