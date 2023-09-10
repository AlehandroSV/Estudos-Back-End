namespace CursoCSharp.EstruturaDeControle {
    internal class EstruturaDoWhile {
        public static void Executar() {
            string entrada;

            do {
                Console.Write("Qual o seu Nome? ");
                entrada = Console.ReadLine();

                Console.WriteLine($"Seja bem-vind {entrada}");
                Console.WriteLine("Deseja continuar? (S/N)");
                entrada = Console.ReadLine();
            } while (entrada.ToLower() == "s");
        }
    }
}
