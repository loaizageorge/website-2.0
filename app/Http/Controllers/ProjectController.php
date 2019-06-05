<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Input;
use App\Models\Project;

class ProjectController extends Controller
{
    public static function create(Request $request)
    {
        $file = $request->file('image');
        $fileName = $file->getClientOriginalName();
        $file->move('images/project_thumbnails', $fileName);
    
        $data = $request->all();
        $data['image'] = $fileName;
        $data['order'] = (int)$data['order'];
        $project = new Project;
        $project->fill($data);
        return response()->json($project->save());
    }

    public static function get($id) 
    {
        return Project::find($id);
    }

    public static function all($order='name')
    {
        return Project::orderBy($order)->get(); 
    }

    public static function update(Request $request, $id)
    {
        $input = $request->all();
        $project = self::get($id);
        $project->fill($input);
        $success = $project->save();
        return response()->json([
            'success' => $success,
            'message' => $success 
                ? 'Successfully updated!'
                : 'Failed to update :('
        ]);
    }

    public static function delete($id)
    {
        $project = Project::find($id);
        $deleted = $project->delete();
        return response()->json([
            'success' => $deleted,
            'message' => $deleted 
                ? 'Successfully deleted!'
                : 'Failed to delete :('
        ]);
    }
}
