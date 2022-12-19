package jpabook.jpashop.repository;


import jpabook.jpashop.domain.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository // 선언하면 컴포넌트 스캔으로 자동으로 스프링 빈 등록
@RequiredArgsConstructor // "a" 부분을 이거 하나로 대체, 대신 꼭 em에 final 넣어주기
public class MemberRepository {

    private final EntityManager em;

    // "a 시작"
//    @Autowired
//    public MemberRepository(EntityManager em) {
//        this.em = em;
//    }
    // "a 끝"

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
        return em.createQuery("select m from Member m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
    }
}
