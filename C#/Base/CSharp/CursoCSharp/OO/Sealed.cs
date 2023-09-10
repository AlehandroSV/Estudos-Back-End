namespace CursoCSharp.OO {
    sealed class SemFilho {
        public double ValorDaFortuna() {
            return 1_407_033.65;
        }
    }

    //class SouFilho : SemFilho {

    //}

    class Avo {
        public virtual bool HorarNomeFamilia() {
            return true;
        }
    }

    class Pai : Avo {
        public override sealed bool HorarNomeFamilia() {
            return true;
        }
    }

    class FilhoRebelde : Pai {
        //public override bool HorarNomeFamilia() {
        //    return true;
        //}
    }

    class Sealed {
        public static void Executar() {
            SemFilho semFilho = new SemFilho();
            Console.WriteLine(semFilho.ValorDaFortuna());

            FilhoRebelde filho = new FilhoRebelde();
            Console.WriteLine(filho.HorarNomeFamilia());
        }
    }
}
