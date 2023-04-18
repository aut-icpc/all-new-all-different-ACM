package com.acm.server.repository;

import com.acm.server.domain.Countdown;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountdownRepository extends JpaRepository<Countdown, Long> {
}
