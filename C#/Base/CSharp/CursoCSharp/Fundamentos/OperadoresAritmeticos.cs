namespace CursoCSharp.Fundamentos {
    internal class OperadoresAritmeticos {
        public static void Executar() {
            // Preço Desconto
            var preco = 1000;
            var imposto = 355;
            var desconto = 0.1;

            // int total = (int)preco + imposto;
            double total = preco + imposto;
            var totalComDesconto = total - total * desconto;
            Console.WriteLine($"O preço final é {totalComDesconto}");

            // IMC
            double peso = 91.2;
            double altura = 1.82;
            double imc = peso / Math.Pow(altura, 2);
            Console.WriteLine($"IMC é {imc}.");

            // Núro Par/Impar
            int par = 24;
            int impar = 55;
            Console.WriteLine($"{par}/2 tem o resto {par % 2}");
            Console.WriteLine($"{impar}/2 tem o resto {impar % 2}");
        }
    }
}
