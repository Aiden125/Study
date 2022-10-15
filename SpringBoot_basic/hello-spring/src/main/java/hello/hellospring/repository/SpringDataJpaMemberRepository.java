package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {

    // 아래처럼 작성하면 이런식으로 찾아준다.
    // JPQL select m from Member m where m.name = ?
    @Override
    Optional<Member> findByName(String name);
}
