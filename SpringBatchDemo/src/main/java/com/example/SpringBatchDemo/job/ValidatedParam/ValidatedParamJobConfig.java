package com.example.SpringBatchDemo.job.ValidatedParam;

import com.example.SpringBatchDemo.job.ValidatedParam.Validator.FileParamValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.job.CompositeJobParametersValidator;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

/**
 * desc: 파일 이름 파라미터 전 그리고 검증
 * run: --spring.batch.job.names=helloWorldJob -fileName=test.csv
 */
@Configuration
@RequiredArgsConstructor
public class ValidatedParamJobConfig {

    @Autowired
    private JobBuilderFactory jobBuilderFactory;

    @Autowired
    private StepBuilderFactory stepBuilderFactory;

    @Bean
    public Job ValidatedParamJob(Step ValidatedParamStep) {
        return jobBuilderFactory.get("ValidatedParamJob")
                .incrementer(new RunIdIncrementer())
//                .validator(new FileParamValidator()) // 이런식으로 하나의 validator만 쓸수도 있고
                .validator(multipleValidator()) // 이런식으로 다수 validator를 쓸수도 있다.
                .start(ValidatedParamStep)
                .build();
    }

    // 여러개의 validator를 넣고자 하는 경우
    private CompositeJobParametersValidator multipleValidator() {
        CompositeJobParametersValidator validator = new CompositeJobParametersValidator();
        validator.setValidators(Arrays.asList(new FileParamValidator()));

        return validator;
    }

    @JobScope
    @Bean
    public Step ValidatedParamStep(Tasklet ValidatedParamTasklet) {
        return stepBuilderFactory.get("ValidatedParamStep")
                .tasklet(ValidatedParamTasklet)
                .build();
    }

    @StepScope
    @Bean
    public Tasklet ValidatedParamTasklet(@Value("#{jobParameters['fileName']}") String fileName) {
        return new Tasklet() {
            @Override
            public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
                System.out.println(fileName);
                System.out.println("Validated Param tasklet");
                return RepeatStatus.FINISHED;
            }
        };
    }

}
