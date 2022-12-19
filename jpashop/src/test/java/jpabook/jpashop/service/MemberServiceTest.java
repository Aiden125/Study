package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.swing.*;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest // 이게 있어야 autowired 등이 성공함
@Transactional // 테스트가 끝나면 롤백용도
public class MemberServiceTest {

    @Autowired MemberService memberService;
    @Autowired MemberRepository memberRepository;
    @Autowired EntityManager em;

    @Test
//    @Rollback(false) // jpa는 기본적으로 롤백하는데, 이걸 false로 두면 눈으로 데이터 확인가능
    public void 회원가입() throws Exception {
        //given
        Member member = new Member();
        member.setName("moon");

        //when
        Long saveId = memberService.join(member);

        //then
//        em.flush();
        assertEquals(member, memberRepository.findOne(saveId));
    }

    @Test(expected = IllegalStateException.class)
    public void 중복_회원_예외() throws Exception {
        //given
        Member member1 = new Member();
        member1.setName("moon1");

        Member member2 = new Member();
        member2.setName("moon1");

        //when
        memberService.join(member1);
        memberService.join(member2); // 여기서 예외가 발생해 이 메서드를 탈출해야한다.

        //then
        fail("예외가 발생해야 한다.");
    }
}