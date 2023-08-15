package com.example.SpringBatchDemo.job.DbDataReadWrite;

import com.example.SpringBatchDemo.core.domain.accounts.Accounts;
import com.example.SpringBatchDemo.core.domain.accounts.AccountsRepository;
import com.example.SpringBatchDemo.core.domain.orders.Orders;
import com.example.SpringBatchDemo.core.domain.orders.OrdersRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.criterion.Order;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.JobScope;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.data.RepositoryItemReader;
import org.springframework.batch.item.data.RepositoryItemWriter;
import org.springframework.batch.item.data.builder.RepositoryItemReaderBuilder;
import org.springframework.batch.item.data.builder.RepositoryItemWriterBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * desc: 주문 테이블 -> 정산 테이블 이관
 * run: --spring.batch.job.name=trMigrationJob
 */
@Configuration
@RequiredArgsConstructor
public class TrMigrationConfig {

    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private AccountsRepository accountsRepository;
    @Autowired
    private JobBuilderFactory jobBuilderFactory;
    @Autowired
    private StepBuilderFactory stepBuilderFactory;

    @Bean
    public Job trMigrationJob(Step trMigrationStep) {
        return jobBuilderFactory.get("trMigrationJob")
                .incrementer(new RunIdIncrementer())
                .start(trMigrationStep)
                .build();
    }

    @JobScope
    @Bean
    public Step trMigrationStep(ItemReader trOrdersReader, ItemProcessor trOrderProcessor
    , ItemWriter trOrderWriter) {
        return stepBuilderFactory.get("trMigrationStep")
                .<Orders, Orders> chunk(5) // 리드도 Orders 타입, Write도 Orders 타입. chunk는 트랜잭션의 단위인데 배치에서는 이를 제공해줌
                .reader(trOrdersReader)
                .processor(trOrderProcessor)
                .writer(trOrderWriter)
                .build();
    }

    
    /**
     * 주문 내역을 RepositoryItemReader를 통해서 읽겠다.
     * 세부 내역은 메서드에서 확인하기
     * 꼭 RepositoryItemReader가 아닌 단순한 ItemReader를 사용해서도 가능하다.
     * @return RepositoryItemReaderBuilder
     */
    @StepScope
    @Bean
    public RepositoryItemReader<Orders> trOrdersReader() { // RepositoryItemReader를 통해서 Orders 객체를 읽겠다. 이름은 trOrdersReader
        return new RepositoryItemReaderBuilder<Orders> () // 빌더로 읽겠다 Orders 객체를
                .name("trOrdersReader")
                .repository(ordersRepository) // 읽을 레파지토리
                .methodName("findAll") // findAll
                .pageSize(5) // 5개씩 읽겠다. 보통 이렇게 트랜잭션 청크 사이즈와 읽어올 사이즈 크기를 맞춤
                .arguments(Arrays.asList()) // 파라미터가 있으면 넘기는데 없어서 비어있는 배열을 넘김
                .sorts(Collections.singletonMap("id", Sort.Direction.ASC))
                .build();
    }

    /**
     * 읽어온 Orders 객체를 Accounts 객체로 넘겨줌
     * @return new ItemProcessor
     */
    @StepScope
    @Bean
    public ItemProcessor<Orders, Accounts> trOrderProcessor() {
        return new ItemProcessor<Orders, Accounts>() {
            @Override
            public Accounts process(Orders item) throws Exception {
                return new Accounts(item);
            }
        };
    }

    @StepScope
    @Bean
    public RepositoryItemWriter<Accounts> trOrderWriter() {
        return new RepositoryItemWriterBuilder<Accounts>()
                .repository(accountsRepository)
                .methodName("save")
                .build();
    }
}
