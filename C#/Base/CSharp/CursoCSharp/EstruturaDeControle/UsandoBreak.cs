namespace CursoCSharp.EstruturaDeControle {
    internal class UsandoBreak {
        public static void Executar () {
            Random random = new Random();
            int num = random.Next(1, 51);

            Console.WriteLine($"O número que quereemos é {num}! \n");

            for (int i = 1; i <=50; i++) {
                Console.Write($"{i} é o número que queremos? ");

                if(i == num) {
                    Console.WriteLine("Sim!\n");
                    break;
                } else {
                    Console.WriteLine("Não!\n");
                }
            }
            Console.WriteLine("Fim!");
        }
    }
}
