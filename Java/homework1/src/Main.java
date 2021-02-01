public class Main {
    public static void main(String[] args) {
//        User roman = new User();
//        roman.age = 31;
//        roman.id = 1;
//        roman.name = "Roman";
//        roman.weight = 67.7;
//        roman.height = 167.7;
//
//
//        User kokos = new User(2, 22, "Kokos",66.22,143.2 );
//        User ura = new User(3, 23, "Ura",67.22,153.2 );
//        User pasha = new User(4, 24, "Pasha",68.22,163.2 );
//        User maks = new User(5, 25, "Maks",69.22,173.2 );
//        User rostik = new User(6, 26, "Rostik",76.22,183.2 );
//        User borus = new User(7, 27, "Borus",86.22,193.2 );
//        User oleg = new User(8, 28, "Oleg",96.22,148.2 );
//        User andri = new User(9, 29, "Andri",106.22,194.2 );
//        User john = new User(10, 39, "John",176.22,154.2 );
//        *************************1*****************************
//         Integer integer = new Integer();
//         int result = integer.a+integer.b+integer.c+integer.d+integer.e+integer.f+integer.g+integer.h+integer.i+integer.j;
//         int result1 = integer.j - integer.a;
//         int result2 = integer.j / integer.b;
//         int result3 = integer.c * integer.j ;
//        System.out.println(result);
//        System.out.println(result1);
//        System.out.println(result2);
//        System.out.println(result3);
//        *************************2*****************************
//         Sentence sentence = new Sentence();
//        String completedSentence = sentence.a+" "+sentence.b+" "+sentence.c+" "+sentence.d+" "+sentence.e+" "+sentence.f+" "+sentence.g+" "+sentence.h+" "+sentence.i+" "+sentence.j;
//        System.out.println(completedSentence);
//        *************************3******************************


//        int sumOfAge = roman.age + kokos.age+ ura.age+ pasha.age + maks.age + rostik.age + borus.age +
//                oleg.age + andri.age + john.age;
//        System.out.println(sumOfAge);
//        double sumOfWeight = roman.weight + kokos.weight+ ura.weight+ pasha.weight + maks.weight +
//                rostik.weight + borus.weight + oleg.weight + andri.weight + john.weight;
//        System.out.println(sumOfWeight);
//        double sumOfHeight = roman.height + kokos.height+ ura.height+ pasha.height + maks.height +
//                rostik.height + borus.height + oleg.height + andri.height + john.height;
//        System.out.println(sumOfHeight);

//*************************4******************************
//        User[] users = new User[10];
//        users[0] = roman;
//        users[1] = kokos;
//        users[2] = ura;
//        users[3] = pasha;
//        users[4] = maks;
//        users[5] = rostik;
//        users[6] = oleg;
//        users[7] = andri;
//        users[8] = borus;
//        users[9] = john;

//        int sumOfArrayAge = 0;
//        double sumOfArrayWeight = 0;
//        double sumOfArrayHeight = 0;

//        for (int i =0; i < users.length; i++){
//            sumOfArrayAge = sumOfArrayAge + users[i].age;
//        }
//        System.out.println(sumOfArrayAge);
//
//
//        for (int i =0; i < users.length; i++){
//            sumOfArrayHeight = sumOfArrayHeight + users[i].height;
//        }
//        System.out.println(sumOfArrayHeight);
//
//
//        for (int i =0; i < users.length; i++){
//            sumOfArrayWeight = sumOfArrayWeight + users[i].weight;
//        }
//        System.out.println(sumOfArrayWeight);
//*************************5******************************
//        Car volvo = new Car(134, 2.2,1,"volvo",2006,"Volvo",true );
//        Car volkswagen = new Car(124, 2.3,2,"volkswagen",2007,"VagonGroup",true );
//        Car scoda = new Car(114, 2.1,3,"scoda",2008,"Scoda",false );
//        Car ford = new Car(1354, 6.4,4,"ford",2012,"Ford",true );
//        Car opel = new Car(104, 1.6,5,"opel",2003,"Opel",false );
//        Car audi = new Car(1346, 2.6,6,"audi",2002,"Audi",true );
//        Car dacia = new Car(54, 1,7,"dacia",2006,"Dacia",false );
//        Car infiniti = new Car(1384, 2.8,8,"infiniti",2013,"Infiniti",true );
//        Car citroen = new Car(124, 1.6,9,"citroen",2009,"Citroen",false );
//        Car maserati = new Car(214, 4.2,10,"maserati",2015,"Maserati",false );

//        int sumOfPower = volvo.power+ volkswagen.power+scoda.power+ford.power+opel.power+audi.power+
//                dacia.power+infiniti.power+citroen.power+maserati.power;
//        double sumOfVolume = volvo.volume+ volkswagen.volume+scoda.volume+ford.volume+opel.volume+audi.volume+
//                dacia.volume+infiniti.volume+citroen.volume+maserati.volume;
//        System.out.println(sumOfVolume);
//*************************6******************************
//                Car[] cars = new Car[10];
//        cars[0] = volvo;
//        cars[1] = volkswagen;
//        cars[2] = scoda;
//        cars[3] = ford;
//        cars[4] = opel;
//        cars[5] = audi;
//        cars[6] = dacia;
//        cars[7] = infiniti;
//        cars[8] = citroen;
//        cars[9] = maserati;


//        int sumOfArrayPower = 0;
//        double sumOfArrayVolume = 0;

//        for (int i =0; i < cars.length; i++){
//            sumOfArrayPower = sumOfArrayPower + cars[i].power;
//        }
//        System.out.println(sumOfArrayPower);

//        for (int i =0; i < cars.length; i++){
//            sumOfArrayVolume = sumOfArrayVolume + cars[i].volume;
//        }
//        System.out.println(sumOfArrayVolume);

//*************************7*****************************
        int number = 421;
        int reverse = 0;
        while ( number > 0 ){

            int remainder = number % 10;
;
            reverse = (reverse *10) + remainder;

            number = number/10;
        }
        System.out.println(reverse);

    }
}
