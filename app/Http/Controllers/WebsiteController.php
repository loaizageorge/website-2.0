<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\ProjectController;

class WebsiteController extends Controller
{
    public function loadWebsite()
    {
        return view('website')->with(['sections' => json_encode(SectionController::getProjects())]);
    }

    public function loadSectionDashboard() 
    {
        return view('sections')->with([
            'sections' => json_encode(SectionController::all()),
            'projects' => json_encode(ProjectController::all()),
        ]);
    }

    public function loadProjectDashboard() 
    {
        return view('project')->with([
            'sections' => json_encode(SectionController::all()),
            'projects' => json_encode(ProjectController::all()),
        ]);
    }

    public function sendMessage(Request $request)
    {
        $input = $request->all();
        
         // Get the form fields, removes html tags and whitespace.
        $name = strip_tags(trim($input["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($input["email"], FILTER_SANITIZE_EMAIL));
        $text = trim($input["message"]);
        
        // Check the data.
        if (empty($name) OR empty($text) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return response()->json([
                'success' => false,
                'message' => 'All fields must be filled out'
            ]);
        }

        // Prepare the email
        $recipient = 'loaizageorge@gmail.com';
        $subject = "New contact from $name";
	$data = [
		'name' => $name,
		'email' => $email,
		'text' => $text
	];

	//$sent = mail($recipient, $subject, $email_content, $email_headers);
 \Mail::send('emails.contact', $data, function ($message)
         {


	            $message->to('loaizageorge@gmail.com');

	        });	    
        
        return response()->json([
            'success' => true,
            'message' => 'Your message has been sent!'
        ]);
    }
}
