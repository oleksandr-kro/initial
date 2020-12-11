package Clothes;

import com.sun.xml.internal.ws.api.model.wsdl.WSDLOutput;

public enum ClothesSize  {
    XXS(40){
        @Override
        public String   getDescription() {
            return " You are skinny your size is: "  + XXS;
        }
    },
    XS(42){
       @Override
       public String   getDescription() {
           return " You are skinny your size is: "  + XS;
       }
       },
    S(44){
        @Override
        public String   getDescription() {
            return " You are thin your size is: " + S;
        }
    },
    M(44){
        @Override
        public String   getDescription() {
            return " You are in good shape your size is: " + M;
        }
    },
    L(48){
        @Override
        public String   getDescription() {
            return " You are overweight your size is: " + L;
        }
    };

   private int euroSize;

    ClothesSize(int euroSize) {
        this.euroSize = euroSize;
    }
    public abstract String getDescription();



}
