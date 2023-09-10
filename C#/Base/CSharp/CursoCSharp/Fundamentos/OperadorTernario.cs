namespace CursoCSharp.Fundamentos {
    internal class OperadorTernario {
        public static void Executar() {
            // var nota = 7.0;
            Console.Write("Qual a nota do seu aluno? ");
            int nota = int.Parse(Console.ReadLine());

            var resultado = nota >= 7.0 ? "Aprovado" : "Reprovado";
            Console.WriteLine(resultado);
        }
    }
}