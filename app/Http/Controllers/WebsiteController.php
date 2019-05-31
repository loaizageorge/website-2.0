<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ProjectController;
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

    public function loadDashboard() 
    {
        return view('dashboard')->with([
            'sections' => json_encode(SectionController::getAll()),
            'projects' => json_encode(ProjectController::getAll()),
        ]);
    }

    public function loadProjectDashboard() 
    {
        return view('project')->with([
            'sections' => json_encode(SectionController::getAll()),
            'projects' => json_encode(ProjectController::getAll()),
        ]);
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

    public function sendMessage(Request $request)
    {
        $input = $request->all();
        
         // Get the form fields, removes html tags and whitespace.
        $name = strip_tags(trim($input["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($input["email"], FILTER_SANITIZE_EMAIL));
        $message = trim($input["message"]);
        
        // Check the data.
        if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return response()->json([
                'success' => false,
                'message' => 'All fields must be filled out'
            ]);
        }

        // Prepare the email
        $recipient = 'loaizageorge@gmail.com';
        $subject = "New contact from $name";
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";
        $email_headers = "From: $name <$email>";

        $sent = mail($recipient, $subject, $email_content, $email_headers);
        
        return response()->json([
            'success' => $sent,
            'message' => $sent ? 'Your message has been sent!' : "Couldn't send your email :( Try again later?"
        ]);
    }
}
