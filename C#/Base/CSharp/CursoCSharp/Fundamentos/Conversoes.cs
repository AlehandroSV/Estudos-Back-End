namespace CursoCSharp.Fundamentos {
    internal class Conversoes {
        public static void Executar() {
            int inteiro = 10;
            double quebrado = inteiro;
            Console.WriteLine(quebrado);

            double nota = 9.7;
            int notaTruncada = (int)nota;
            Console.WriteLine($"Nota truncada: {notaTruncada}");

            Console.WriteLine("Digite sua idade:");
            string idadeString = Console.ReadLine();
            int idadeInteira = int.Parse(idadeString);
            Console.WriteLine($"Idade inserida: {idadeInteira}");
            idadeInteira = Convert.ToInt32(idadeString);
            Console.WriteLine($"Resultado: {idadeInteira}");

            Console.Write("Digite um número: ");
            string palavra = Console.ReadLine();
            int numero1;
            int.TryParse(palavra, out numero1);
            Console.WriteLine($"Resultado: {numero1}"); 
            
            Console.Write("Digite um número: ");
            int.TryParse(Console.ReadLine(), out int numero2);
            Console.WriteLine($"Resultado: {numero2}");
        }
    }
}
