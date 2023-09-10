namespace CursoCSharp.Fundamentos {
    internal class VariaveisEConstantes {
        public static void Executar() {

            double raio = 4.5;
            const double PI = 3.14;
            raio = 5.5;
            // PI = 3.1415;

            double area = PI * raio * raio;
            Console.WriteLine(area);
            Console.WriteLine("Área é " + area);

            // Tipos internos
            bool estaChovendo = true;
            Console.WriteLine("Está chovendo? " + estaChovendo);

            byte idade = 45;
            Console.WriteLine("Idade" + idade);

            sbyte saldoDeGols = sbyte.MinValue;
            Console.WriteLine("Saldo de Gols: " + saldoDeGols);

            short salario = short.MinValue;
            Console.WriteLine("Salário: " + salario);

            int menorValorInt = int.MinValue;
            Console.WriteLine("Menor valor Int: " + menorValorInt);

            uint populacaoBrasileira = 207_600_00;
            Console.WriteLine("População Brasileira: " + populacaoBrasileira);

            long menorValorLong = long.MinValue;
            Console.WriteLine("Menor valor Long: " + menorValorLong);

            ulong populacaoMundial = 77_600_000_000;
            Console.WriteLine("População Mundial: " + populacaoMundial);

            float precoComputador = 1299.99f;
            Console.WriteLine("Preço Computador: " + precoComputador);

            double valorDeMercadoDaApple = 1_000_000_000_000_000.00;
            Console.WriteLine("Valor Apple" + valorDeMercadoDaApple);

            decimal distanciaEstreEstrelas = decimal.MinValue;
            Console.WriteLine("Distância entre Estrelas " + distanciaEstreEstrelas);

            char letra = 'b';
            Console.WriteLine("Letra" + letra);

            string texto = "Seja bem vindo ao Curso de C#!";
            Console.WriteLine(texto);
        }
    }
}
