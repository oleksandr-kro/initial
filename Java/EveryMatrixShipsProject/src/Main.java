
public class Main {

    static int[][] ships = {
            {0, 0, 0, 1, 0, 0, 0, 1, 0, 0,},
            {0, 1, 0, 0, 0, 0, 0, 1, 0, 0,},
            {0, 1, 0, 1, 1, 0, 0, 0, 0, 0,},
            {0, 1, 0, 1, 1, 0, 0, 1, 1, 1,},
            {0, 1, 0, 0, 0, 0, 0, 0, 0, 0,},
            {0, 0, 0, 0, 0, 0, 0, 0, 0, 0,},
            {1, 1, 1, 1, 0, 1, 0, 0, 0, 0,},
            {0, 0, 0, 0, 0, 0, 0, 0, 0, 0,},
            {1, 1, 0, 0, 0, 0, 0, 1, 0, 0,},
            {1, 1, 0, 0, 0, 0, 0, 0, 0, 1,}
    };

    public static void main(String[] args) {

        int count = 0;


        for (int line = 0; line < ships.length; line++) {
            for (int pos = 0; pos < ships[0].length; pos++) {

                if (ships[line][pos] == 1) {
                    int tempLine = line;
                    int tempPos = pos;
                    if (++tempPos < ships[line].length && ships[line][tempPos] == 1) {
                        continue;
                    } else if (++tempLine < ships.length && ships[tempLine][pos] == 1) {
                        continue;
                    } else {
                        count++;
                    }
                }
            }
        }

        System.out.println(count);
    }
}
