package jpabook.jpashop.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address { // 이 클래스는 값타입으로 생성할 때만 지정하고 그 이후에는 건드리지 않는 규약을 따른다

    private String city;
    private String street;
    private String zipcode;

    protected Address() { // jpa 스펙상 만들어야함
    }

    public Address(String city, String street, String zipcode) {
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
    }
}
