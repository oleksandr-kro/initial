package classwork5;

import java.util.ArrayList;
import java.util.Arrays;


public class Attempt {
    int [] available = {240,360,720};
    int [] allowed = {360,720};
    int [] preferred = {240};

    ArrayList<Integer> arrayList = new ArrayList<>();


    public void attempt(){
       for  (int i: preferred){

           for (int j: allowed) {
               if (i == j) {
                   arrayList.add(i);
               }
               for (int k : available) {
                if (i == k){
                    arrayList.add(i);
                }

               }
           }
       }



    }


    @Override
    public String toString() {
        return "Attempt{" +
                "available=" + Arrays.toString(available) +
                ", allowed=" + Arrays.toString(allowed) +
                ", preferred=" + Arrays.toString(preferred) +
                '}';
    }
}
