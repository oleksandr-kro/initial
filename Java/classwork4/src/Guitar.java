public class Guitar implements MusicalInstrument {

   int numberOfStrings;

    public Guitar(int numberOfStrings) {
        this.numberOfStrings = numberOfStrings;
    }

    @Override
    public void play() {
        System.out.println("Грає Барабан з кількістю струн:" + numberOfStrings);
    }
}
