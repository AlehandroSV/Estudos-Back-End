namespace CursoCSharp.ClassesEMetodos {
    class CalculadoraEstatica {
        // Método de instância!
        public int Soma(int a, int b) {
            return a + b;
        }

        // Método de Classe ou Método estático!
        public static int Multiplicar(int a, int b) {
            return a * b;
        }
    }

    internal class MetodosEstaticos {
        public static void Executar() {
            var resultado = CalculadoraEstatica.Multiplicar(2, 2);
            Console.WriteLine(resultado);

            CalculadoraEstatica calc = new CalculadoraEstatica();
            Console.WriteLine($"Somar {calc.Soma(2, 2)}");
        }
    }
}
