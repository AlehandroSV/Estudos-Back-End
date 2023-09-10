namespace CursoCSharp.ClassesEMetodos {
    internal class DesafioAtributos {
        int a = 10;

        public static void Executar() {
            // Acessar variável 'a' dentro do método Executar!

            // Minha resolução
            var b = new DesafioAtributos();
            Console.WriteLine(b.a);

            // Resolução da aula
            DesafioAtributos desafio = new DesafioAtributos();
            Console.WriteLine(desafio.a);
        }
    }
}
