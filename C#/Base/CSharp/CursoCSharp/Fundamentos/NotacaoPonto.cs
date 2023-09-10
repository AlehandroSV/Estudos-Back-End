namespace CursoCSharp.Fundamentos {
    internal class NotacaoPonto {
        public static void Executar() {
            var saudacao = "olá".ToUpper()
                .Insert(3, " Word!")
                .Replace("Word", "Mundo");

            Console.WriteLine(saudacao);
        }
    }
}
