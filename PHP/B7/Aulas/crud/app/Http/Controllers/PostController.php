<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::all();

        return $post;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $postDb = new Post();

        $postDb->title = "Teste";
        $postDb->content = "Teste";
        $postDb->author = "Teste";

        $postDb->save();

        return $postDb;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $post = Post::find($id);

        return $post;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $post = Post::find($id)->update([
            'title' => "TesteUpdate",
            'content' => "TesteUpdate",
            'author' => "TesteUpdate",
            'id' => $id
        ]);

        return $post;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $post = Post::find($id);

        if ($post) {
            $post->delete();
        }

        return "Não existe Post com esse ID";
    }
}
