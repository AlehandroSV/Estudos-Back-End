<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    //
    public function index()
    {
        // Aqui eu poderia criar uma lógica...
        // Verificar se um usuário existe
        // Buscar dados de um usuário, etc...

        return view('bemvindo');
    }

    public function exit()
    {
        return view('sair');
    }
}
