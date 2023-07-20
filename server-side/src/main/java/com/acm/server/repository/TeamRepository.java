package com.acm.server.repository;

import com.acm.server.domain.Team;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for the Team entity.
 * This interface provides CRUD operations, sorting and pagination functionality out of the box.
 * @see com.acm.server.domain.Team
 * @author Farid Masjedi
 */
public interface TeamRepository extends JpaRepository<Team, Long> {
}
