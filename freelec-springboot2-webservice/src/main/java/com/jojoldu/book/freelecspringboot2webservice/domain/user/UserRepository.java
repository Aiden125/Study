package com.jojoldu.book.freelecspringboot2webservice.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    /**  처음 가입하는 사용자인지 확인용도  */
    Optional<User> findByEmail(String email);
}
