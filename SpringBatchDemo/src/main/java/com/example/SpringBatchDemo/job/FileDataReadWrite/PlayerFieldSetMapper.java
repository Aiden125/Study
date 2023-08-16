package com.example.SpringBatchDemo.job.FileDataReadWrite;

import com.example.SpringBatchDemo.job.FileDataReadWrite.dto.Player;
import org.springframework.batch.item.file.mapping.FieldSetMapper;
import org.springframework.batch.item.file.transform.FieldSet;
import org.springframework.validation.BindException;

/**
 * desc: 파일의 필드셋을 매핑해주는 곳
 * FiledSetMapper를 꼭 구현해줘야함
 */
public class PlayerFieldSetMapper implements FieldSetMapper<Player> {
    @Override
    public Player mapFieldSet(FieldSet fieldSet) throws BindException {
        Player player = new Player();

        player.setID(fieldSet.readString(0)); // 라인의 첫번째는 id
        player.setLastName(fieldSet.readString(1)); // 라인의 두번째는 lastName 등
        player.setFirstName(fieldSet.readString(2));
        player.setPosition(fieldSet.readString(3));
        player.setBirthYear(fieldSet.readInt(4));
        player.setDebutYear(fieldSet.readInt(5));

        return player;
    }
//    public Player mapFieldSet(FieldSet fieldSet) {
//        Player player = new Player();
//
//        player.setID(fieldSet.readString(0));
//        player.setLastName(fieldSet.readString(1));
//        player.setFirstName(fieldSet.readString(2));
//        player.setPosition(fieldSet.readString(3));
//        player.setBirthYear(fieldSet.readInt(4));
//        player.setDebutYear(fieldSet.readInt(5));
//
//        return player;
//    }
}
