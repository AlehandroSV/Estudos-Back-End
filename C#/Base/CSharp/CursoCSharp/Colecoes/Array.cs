﻿namespace CursoCSharp.Colecoes {
    class Array {
        public static void Executar() {
            string[] alunos = new string[5];
            alunos[0] = "Alehandro";
            alunos[1] = "Carlos";
            alunos[2] = "Luan";
            alunos[3] = "Yuri";
            alunos[4] = "Matus";

            foreach(var aluno in alunos) {
                Console.WriteLine(aluno);
            }

            double somatorio = 0;
            double[] notas = { 9.7, 4.8, 8.4, 8.2, 6.8 };

            foreach(var nota in notas) {
                somatorio += nota;
            }

            // for (int i = 0; i < notas.Length; i++) {
            //     somatorio += notas[i];
            // }

            double media = somatorio / notas.Length;
            Console.WriteLine(media);

            char[] letras = {'A', 'r', 'r', 'a', 'y' };
            string palavra = new string(letras);
            Console.WriteLine(palavra);
        }
    }
}
