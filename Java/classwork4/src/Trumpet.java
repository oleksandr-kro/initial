public class Trumpet  implements MusicalInstrument{

   double diameter;

    public Trumpet(double diameter) {
        this.diameter = diameter;
    }

    @Override
    public void play() {
        System.out.println("Грає Барабан з діаметром:" + diameter);
    }
}
