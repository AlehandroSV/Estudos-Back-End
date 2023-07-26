<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create(Request $r)
    {
        $postDb = new Post();

        $postDb->title = $r->title;
        $postDb->content = $r->content;
        $postDb->author = $r->author;

        $postDb->save();

        return $postDb;
    }

    public function read()
    {
        $post = new Post();
        $posts = $post->all();

        return $posts;
    }

    public function readById(Request $r)
    {
        $id = $r->id;

        $post = Post::find($id);

        return $post;
    }

    public function update(Request $r)
    {
        $post = Post::where('id', '=', $r->id)->update([
            'title' => "TesteUpdate",
            'content' => "TesteUpdate",
            'author' => "TesteUpdate",
            'id' => $r->id
        ]);

        return $post;
    }

    public function delete(Request $r)
    {
        $post = Post::find($r->id);

        if ($post) {
            $post->delete();
        }

        return "Não existe Post com esse ID";
    }
}
