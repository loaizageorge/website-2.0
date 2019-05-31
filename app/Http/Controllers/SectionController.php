<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Section;

class SectionController extends Controller
{
    public static function create(Request $request)
    {
        $section = new Section;
        $section->name = $request->name;
        $section->order = $request->order;
        $success = $section->save();
        return response()->json([
            'success' => $success,
            'message' => $success 
                ? 'Successfully created!'
                : 'Failed to create :('
        ]);

        return response()->json($section->save());
    }

    public static function all()
    {
        return Section::all();
    }

    protected function loadDashboard()
    {
        return view('sections')->with([
            'sections' => json_encode(self::all()),
        ]);
    }
}
