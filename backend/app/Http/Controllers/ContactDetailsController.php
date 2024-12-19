<?php

namespace App\Http\Controllers;

use App\Models\ContactDetails;
use App\Http\Requests\StoreContactDetailsRequest;
use App\Http\Requests\UpdateContactDetailsRequest;

class ContactDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ContactDetails::all();
        return response()->json($data);
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
    public function store(StoreContactDetailsRequest $request)
    {

        try {
            // Validate request data using StoreContactDetailsRequest validation rules
            $validated = $request->validated();
    
            // Create a new contact detail entry in the database
            $contactDetail = ContactDetails::create([
                'name' => $validated['name'],   // Use validated data
                'email' => $validated['email'], // Use validated data
                'message' => $validated['message'], // Use validated data
            ]);
    
            // Return the created contact detail as a JSON response with 201 status
            return response()->json($contactDetail, 201);
        } catch (\Exception $e) {
            
    
            // Return error response with the exception message and 500 status code
            return response()->json([
                'message' => 'Error storing contact detail.',
                'error' => $e->getMessage(),
            ], 500);
        }
            
         
        
    }

    /**
     * Display the specified resource.
     */
    public function show(ContactDetails $contactDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContactDetails $contactDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactDetailsRequest $request, ContactDetails $contactDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContactDetails $contactDetails)
    {
        //
    }
}
