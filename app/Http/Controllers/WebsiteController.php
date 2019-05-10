<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Input;
use App\Models\Section;
use App\Models\Project;
use App\Models\SectionProject;


class WebsiteController extends Controller
{
    public function index() 
    {
        $data = self::getAllSectionsWithProjects();
        return view('website')->with('sections', json_encode($data));
    }

    protected function getSections() 
    {
        $sections = Section::all();
        return $sections;
    }

    public function loadDashboard() 
    {
        return view('dashboard')->with('sections', json_encode($this->getSections()));
    }

    public function addSection(Request $request)
    {
        $section = new Section;
        $section->name = $request->name;
        $section->order = $request->order;

        return response()->json($section->save());
    }

    public function addProject(Request $request)
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

    public function getAllSectionsWithProjects()
    {
        return Section::with('projects')->get();
    }

    public function getProjectsInSection($section_id)
    {
        // get all the projects in a section
        $section = new Section;
        $projects = $section::find($section_id)->projects;
        return $projects;
        
    }
}
