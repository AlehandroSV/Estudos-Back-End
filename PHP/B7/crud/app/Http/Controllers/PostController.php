<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create(Request $r)
    {
        $newPost = [
            'title' => 'Meu primeiro Post',
            'content' => 'Conteúdo Qualquer',
            'author' => 'Alehandro Santos Vidal',
        ];

        // Forma convensional
        // $post = new Post($newPost);
        // $post->save();

        $post = new Post();
        $post->title = 'Meu primeiro Post';
        $post->content = 'Conteúdo Qualquer';
        $post->author = 'Alehandro Santos Vidal';
        $post->save();

        dd($post);
    }

    public function read(Request $r)
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
}
