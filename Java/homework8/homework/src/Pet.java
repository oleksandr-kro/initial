import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


public class Pet implements Serializable {
    private int id;
    private String nickname;
    private String animalSpecies;

    public Pet() {
    }
    public Pet(int id, String nickname, String animalSpecies) {
        this.id = id;
        this.nickname = nickname;
        this.animalSpecies = animalSpecies;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getAnimalSpecies() {
        return animalSpecies;
    }

    public void setAnimalSpecies(String animalSpecies) {
        this.animalSpecies = animalSpecies;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", nickname='" + nickname + '\'' +
                ", animalSpecies='" + animalSpecies + '\'' +
                '}';
    }




}
