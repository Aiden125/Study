package com.moon.book.springboot.web.dto;

import org.junit.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class HelloResponseDtoTest {

    @Test
    public void 롬복_기능_테스트(){
        //given
        String name = "test";
        int amount = 1000;

        //when
        HelloResponseDto dto = new HelloResponseDto(name, amount);

        //then
        assertThat(dto.getName()).isEqualTo(name);
        // assertThat = 검증 메소드, 검증 대상을 메소드 인자로 받는다. 메소드 체이닝이 지원되어 메소드를 이어서 쓸 수 있다.
        assertThat(dto.getAmount()).isEqualTo(amount);
    }
}
