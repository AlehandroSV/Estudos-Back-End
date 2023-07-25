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

        $nome = "Alehandro";
        $sobrenome = "Vidal";
        $idade = 19;
        $dataNacimento = "26/07/2004";

        $data = ['apelidoNome' => $nome, 'idade' => $idade, 'sobrenome' => $sobrenome, 'dataNacimento' => $dataNacimento];

        return view('bemvindo', $data);
    }

    public function exit()
    {
        return view('sair');
    }
}
