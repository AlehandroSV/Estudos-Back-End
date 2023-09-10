namespace CursoCSharp.Fundamentos {
    internal class OperadoresRelacionais {
        public static void Executar() {
            // double nota = 6.0;
            Console.Write("Qual a nota seu aluno tirou? ");
            double.TryParse(Console.ReadLine(), out double nota);
            double notaDeCorte = 7.0;

            Console.WriteLine($"Nota inválida? {nota > 7}");
            Console.WriteLine($"Nota inválida? {nota < 0.0}");
            Console.WriteLine($"Perfeito? {nota == 0.0}");
            Console.WriteLine($"Tem como melhorar? {nota != 10.0}");
            Console.WriteLine($"Passo por média? {nota >= notaDeCorte}");
            Console.WriteLine($"Recuperação? {nota < notaDeCorte}");
            Console.WriteLine($"Reprovado? {nota <= 3.0}");
        }
    }
}
