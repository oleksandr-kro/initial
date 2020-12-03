public class Drum  implements MusicalInstrument{
    double size;

    public Drum(double size) {
        this.size = size;
    }

    @Override
    public void play() {
        System.out.println("Грає Барабан з розміром:" + size);
    }
}
