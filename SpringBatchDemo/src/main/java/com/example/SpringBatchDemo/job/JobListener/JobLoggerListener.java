package com.example.SpringBatchDemo.job.JobListener;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.JobExecutionListener;

@Slf4j
public class JobLoggerListener implements JobExecutionListener {

    private static String BEFORE_MESSAGE = "{} Job is running";
    private static String AFTER_MESSAGE = "{} Job is DONE. (Stuatus: {})";

    @Override
    public void beforeJob(JobExecution jobExecution) {
        log.info(BEFORE_MESSAGE, jobExecution.getJobInstance().getJobName());
    }

    @Override
    public void afterJob(JobExecution jobExecution) {
        log.info(AFTER_MESSAGE,
                jobExecution.getJobInstance().getJobName(),
                jobExecution.getStatus());

        // job이 실패했을 경우
        if (jobExecution.getStatus() == BatchStatus.FAILED) {
            // email 등 알림. 이번에는 간단하게 로그로
            log.info("job is fail");
        }
    }
}
