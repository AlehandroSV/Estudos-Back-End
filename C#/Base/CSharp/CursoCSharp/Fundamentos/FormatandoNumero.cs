using System.Globalization;

namespace CursoCSharp.Fundamentos {
    internal class FormatandoNumero {
        public static void Executar() {
            double valor = 15.175;
            // Casas Decimais
            Console.WriteLine(valor.ToString("F1"));
            // Para moedas
            Console.WriteLine(valor.ToString("C"));
            // Percetual
            Console.WriteLine(valor.ToString("P"));
            // "Personalizando formatação"
            Console.WriteLine(valor.ToString("#.##"));

            CultureInfo cultura = new CultureInfo("pt-BR");
            Console.WriteLine(valor.ToString("C0", cultura));

            int inteiro = 256;
            Console.WriteLine(inteiro.ToString("D10"));
        }
    }
}
