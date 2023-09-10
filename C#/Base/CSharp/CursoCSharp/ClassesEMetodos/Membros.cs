namespace CursoCSharp.ClassesEMetodos {
    internal class Membros {
        public static void Executar() {
            Pessoa siclano = new Pessoa();
            siclano.Nome = "Alehandro";
            siclano.Idade = 18;

            siclano.ApresentarNoConsole();
            // Console.WriteLine($"{siclano.Nome} tem {siclano.Idade} anos.");

            var fulano = new Pessoa();
            fulano.Nome = "Raquel";
            fulano.Idade = 19;

            var apresentacaoDoFulano = fulano.Apresentar();

            Console.WriteLine($"Vala mds {apresentacaoDoFulano}");
            Console.WriteLine($"Vala mds {apresentacaoDoFulano.Length}");
        }
    }
}
