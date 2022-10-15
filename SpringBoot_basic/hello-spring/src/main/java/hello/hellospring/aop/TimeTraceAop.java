package hello.hellospring.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class TimeTraceAop {

    @Around("execution(* hello.hellospring..*(..))")
//    @Around("execution(* hello.hellospring.service..*(..))") 서비스에만 적용하고 싶다면 이렇게
    public Object execute(ProceedingJoinPoint joinPoint) throws Throwable{
       long start = System.currentTimeMillis();
        System.out.println("START: " + joinPoint.toString());
        try {
            return joinPoint.proceed();
        } finally{
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;
            System.out.println("END " + joinPoint.toString() + " " + timeMs + "ms");
        }
    }
}
