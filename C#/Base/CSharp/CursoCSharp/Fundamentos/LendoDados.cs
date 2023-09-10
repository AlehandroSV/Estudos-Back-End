using System.Globalization;

namespace CursoCSharp.Fundamentos {
    internal class LendoDados {
        public static void Executar() {
            Console.WriteLine("Qual é seu nome? ");
            var nome = Console.ReadLine();
            Console.WriteLine("Qual é sua idade? ");
            int idade = int.Parse(Console.ReadLine(),CultureInfo.InvariantCulture);
            Console.WriteLine("Qual seu salário? ");
            double salario = double.Parse(Console.ReadLine());
            Console.WriteLine($"Olá! {nome}! Tudo bem? Então você tem {idade}! Seu salário é R${salario}");
        }
    }
}
