package com.jojoldu.book.freelecspringboot2webservice.config.auth;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// target :: 이 어노테이션이 생성될 수 있는 위치 지정,
// 메소드의 파라미터로 선언된 객체에서만 사용가능
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)

// 이 파일을 어노테이션 클래스로 지정
// LoginUser라는 이름을 가진 어노테이션 생성
public @interface LoginUser {
}
