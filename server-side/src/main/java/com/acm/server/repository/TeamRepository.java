package com.acm.server.repository;

import com.acm.server.domain.Team;
import com.acm.server.request.UpdateStatusRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

/**
 * Repository for the Team entity.
 * This interface provides CRUD operations, sorting and pagination functionality out of the box.
 * @see com.acm.server.domain.Team
 * @author Farid Masjedi
 */
public interface TeamRepository extends JpaRepository<Team, Long> {
    @Modifying
    @Transactional
    @Query("update Team t set t.status = :#{#request.status}")
    Team updateStatus(UpdateStatusRequest request);
}
