public enum Seasons implements Description{
    SPRING(15){
        @Override
        public void getDescription() {
            System.out.println("З приходом весни, коли все оживає, прокидається від довгого сну, розквітає і кожна пташка співає про кохання");
        }
    },
    AUTUMN(12){
        @Override
        public void getDescription() {
            System.out.println("Осінь – це надзвичайна, чарівна і казкова пора року");
        }
    },
    SUMMER(33){
        @Override
        public void getDescription() {
            System.out.println("Тепла пора року");
        }
    },
    WINTER(-6){

    };
    final int AVG_TEMPERATURE;

    Seasons(int avg_temperature) {
        AVG_TEMPERATURE = avg_temperature;
    }



}
