package jpabook.jpashop.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "orders") // 테이블 이름을 적어줘야함
@Getter @Setter
public class Order {

    @Id @GeneratedValue
    @Column(name = "order_id") // 컬럼 이름 직접 지정해주기
    private Long id;

    @ManyToOne // 매우 중요한 부분 orders 테이블 기준 member를 보면 manytoone이기 때문에
    @JoinColumn(name = "member_id")
    private Member member;

}
