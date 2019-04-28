<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Input;
use App\Models\Section;

class WebsiteController extends Controller
{
    public function index() 
    {
        $sections = Section::all();
        return view('website')->with('sections', json_encode($sections));
    }

    public function loadDashboard() 
    {
        return view('dashboard');
    }

    public function addSection(Request $request)
    {
        $section = new Section;

        $section->name = $request->name;
        $section->order = $request->order;

        return response()->json($section->save());
        
    }
}
