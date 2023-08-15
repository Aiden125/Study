package com.example.SpringBatchDemo.core.domain.accounts;

import com.example.SpringBatchDemo.core.domain.orders.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountsRepository extends JpaRepository<Accounts, Integer> {
}
