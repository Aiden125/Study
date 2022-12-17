package jpabook.jpashop.service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service // 컴포넌트 스캔 대상이 되어서 빈에 자동 등록
@Transactional
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    /**
     * 회원 가입
     */
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
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    // 회원 1명 찾기
    public Member findOne(Long memberId) {
        return memberRepository.findOne(memberId);
    }
}