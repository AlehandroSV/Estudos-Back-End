namespace CursoCSharp.ClassesEMetodos {
    internal class Pessoa {
        public string Nome;
        public int Idade;

        public string Apresentar() {
            if (Nome == "" || Idade >= 0) {
                return string.Format($"Algo inesperado aconteceu! 'Nome' e 'Idade' estão vazios/inválidos");
            }
            return string.Format($"Olá! Me chamo {Nome} e tenho {Idade} anos!");
        }

        public void ApresentarNoConsole() {
            Console.WriteLine(Apresentar());
        }

        public void Zerar() {
            Nome = "";
            Idade = 0;
        }
    }
}
