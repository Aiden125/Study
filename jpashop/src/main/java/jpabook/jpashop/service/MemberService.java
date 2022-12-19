package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service // 컴포넌트 스캔 대상이 되어서 빈에 자동 등록
@Transactional(readOnly = true) // 스프링프레임워크 임포트로 할 것, readOnly = true 해주면 모든 조회에 최적화
@RequiredArgsConstructor // final이 있는 필드만 가지고 인젝션 "a" 부분을 대신하는 역할
public class MemberService {

    private final MemberRepository memberRepository; // final 하는 것을 권장

//    @Autowired 생성자가 하나만 있으면 스프링이 자동으로 인젝션 해줌
//    public MemberService(MemberRepository memberRepository) { "a"
//        this.memberRepository = memberRepository;
//    }

    /**
     * 회원 가입
     */
    @Transactional // 기본적으로 readOnly = false
    public Long join(Member member) {
        validateDuplicateMember(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) { // 중복회원 검증
        List<Member> findMembers = memberRepository.findByName(member.getName());
        if (!findMembers.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

    // 회원 전체조회
//    @Transactional(readOnly = true) // 조회에는 readOnly 걸어주면 JPA가 조회를 최적화함 이렇게 직접 넣을 수 있으나 조회가 많으면 위에 선언하는 것이 간편
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    // 회원 1명 찾기
//    @Transactional(readOnly = true) // 조회에는 readOnly 걸어주면 JPA가 조회를 최적화함 이렇게 직접 넣을 수 있으나 조회가 많으면 위에 선언하는 것이 간편
    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }
}
