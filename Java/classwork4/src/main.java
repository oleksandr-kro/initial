public class main {
    public static void main(String[] args) {
         Drum drum = new Drum(16);
         Guitar guitar = new Guitar(5);
         Trumpet trumpet = new Trumpet(18);

        MusicalInstrument[] musicalInstruments = new MusicalInstrument[]{drum,guitar,trumpet};

        for (MusicalInstrument musicalInstrument : musicalInstruments) {
            musicalInstrument.play();
        }
    }
}
