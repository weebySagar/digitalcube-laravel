<?php

namespace App\Http\Controllers;

use App\Models\Query;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QueryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Query::query()
        ->where('user_id',request()->user()->id)->orderBy('created_at','desc')->get();
        // dd($query);
        return Inertia::render("Query",["queries"=> $query]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->validate(
            [
                "message"=>["required","string"],
            ]
        );
        $data['user_id'] = $request->user()->id;
        $query = Query::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Query $query)
    {
        //
        $query = Query::all()->sortBy('created_at','desc');
        return Inertia::render('Dashboard/Query',['queries'=> $query]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Query $query)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Query $query)
    {

        $request->validate([
            'queryId' => 'required',
            'status' => 'required',
        ]);
        $query= Query::findOrFail($request->queryId );

        // dd($request->user);

        $query->update([
            'status'=>$request->status,
            'employee_id'=>$request->user
        ]);


        // dd($request->status);
        // $query= Query::where('id',request->id)
        // ->update(['status'=> request->status]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Query $query)
    {
        //
    }
}
