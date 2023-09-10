using System.Security.Cryptography.X509Certificates;

namespace CursoCSharp.ClassesEMetodos {
    public struct SPonto {
        public int X;
        public int Y;
    }

    public class CPonto {
        public int X;
        public int Y;
    }
   
    internal class StructVsClass {
        public static void Executar() {
            SPonto ponto1 = new SPonto { X = 1, Y = 4 };
            SPonto copiaPonto1 = ponto1; // Atribuição por Valor!
            ponto1.X = 3;

            Console.WriteLine($"Ponto 1 X:{ponto1.X}");
            Console.WriteLine($"Cópia Ponto 1 X:{copiaPonto1.X}");

            CPonto ponto2 = new CPonto { X = 1, Y = 4 };
            CPonto copiaPonto2 = ponto2; // Atribuição por Referência!
            ponto2.X = 4;

            Console.WriteLine($"Ponto 2 X:{ponto2.X}");
            Console.WriteLine($"Cópia Ponto 2 X:{copiaPonto2.X}");
        }
    }
}
