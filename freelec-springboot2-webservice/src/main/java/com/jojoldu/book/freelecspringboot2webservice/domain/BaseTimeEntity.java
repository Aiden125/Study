package com.jojoldu.book.freelecspringboot2webservice.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // JPA Entity 클래스들이 BaseTitmeEntity를 상속할 경우 필드들도 칼럼으로 인식하도록
@EntityListeners(AuditingEntityListener.class) // BaseTitmeEntity클래스에 Auditing 기능 포함시키기
public class BaseTimeEntity {

    @CreatedDate // Entity가 생성되어 저장될 때 시간 자동 저장
    private LocalDateTime createDate;

    @LastModifiedDate // Entity가 변경되면 시간 자동 저장
    private LocalDateTime modifiedDate;
}
