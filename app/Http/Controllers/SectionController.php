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

    public static function update(Request $request, $id)
    {
    $input = $request->all();
        $section = self::get($id);
        $section->fill($input);
        $success = $section->save();
        return response()->json([
            'success' => $success,
            'message' => $success 
                ? 'Successfully updated!'
                : 'Failed to update :('
        ]);

    }

    public static function get($id)
    {
        return Section::find($id);
    }

    public static function all()
    {
        return Section::all();
    }

    public static function delete($id)
    {
        $section = Section::find($id);
        $deleted = $section->delete();
    }

    protected function loadDashboard()
    {
        return view('sections')->with([
            'sections' => json_encode(self::all()),
        ]);
    }
}
