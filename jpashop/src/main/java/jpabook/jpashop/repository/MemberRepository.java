package jpabook.jpashop.repository;


import jpabook.jpashop.domain.Member;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository // 선언하면 컴포넌트 스캔으로 자동으로 스프링 빈 등록
public class MemberRepository {

    @PersistenceContext // 이걸 선언하면 스프링이 엔티티 매니저를 만들어서 얘로 지정해줌
    private EntityManager em;

    public void save(Member member) {
        em.persist(member);
    }

    public Member findOne(Long id) {
        return em.find(Member.class, id); // 단건 조회, 첫번째 타입, 두번째 pk
    }

    public List<Member> findAll() {
        return em.createQuery("select m from Member m", Member.class) // 첫번쨰 JPQL, 두번쨰 반환타입
                .getResultList();
    }

    public List<Member> findByName(String name) {
        return em.createQuery("select m from member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
    }
}
