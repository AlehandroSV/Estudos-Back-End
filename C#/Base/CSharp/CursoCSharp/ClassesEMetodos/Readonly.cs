namespace CursoCSharp.ClassesEMetodos {
    internal class Readonly {
        public class Cliente {
            public string Nome;
            readonly DateTime Nascimeto;

            public Cliente(string nome, DateTime nascimento) {
                Nome = nome;
                Nascimeto = nascimento;
            }

            public string GetDataDeNascimento() {
                return String.Format($"{Nascimeto.Day}/{Nascimeto.Month}/{Nascimeto.Year}");
            }
        }
        public static void Executar() {
            var novoCliente = new Cliente("Alehandro Vidal", new DateTime(2004, 7, 26));

            Console.WriteLine(novoCliente.Nome);
            Console.WriteLine(novoCliente.GetDataDeNascimento());
        }
    }
}
