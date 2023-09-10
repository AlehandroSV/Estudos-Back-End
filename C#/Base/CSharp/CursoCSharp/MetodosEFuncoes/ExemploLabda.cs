namespace CursoCSharp.MetodosEFuncoes {
    internal class ExemploLabda {
        public static void Executar() {
            Action algoNoConsole = () => {
                Console.WriteLine("Lambda com C#");
            };

            algoNoConsole();

            Func<int> jogarDado = () => {
                Random random = new Random();
                return random.Next(1, 7);
            };

            Console.WriteLine(jogarDado());

            Func<int, string> conversorHex = numero => numero.ToString("X");

            Console.WriteLine(conversorHex(734789));

            Func<int, int, int, string> formatarData = (dia, mes, ano) => String.Format($"{dia:D2}/{mes:D2}/{ano:D4}");
            
            Console.WriteLine(formatarData(1, 1, 2022));
        }
    }
}
