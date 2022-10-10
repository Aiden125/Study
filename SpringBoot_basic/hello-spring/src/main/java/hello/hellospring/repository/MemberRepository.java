package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);
    Optional<Member> findById(Long id); // Optional은 null 값 일 경우 대처하는 클래스
    Optional<Member> findByName(String name);
    List<Member> findAll();
}
