package com.acm.server.repository;

import com.acm.server.domain.Countdown;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for the Countdown entity.
 * This interface provides CRUD operations, sorting and pagination functionality out of the box.
 * @see com.acm.server.domain.Countdown
 * @author Farid Masjedi
 */
@Repository
public interface CountdownRepository extends JpaRepository<Countdown, Long> {
}
