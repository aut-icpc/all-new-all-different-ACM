package com.acm.server.repository;

import com.acm.server.domain.Team;
import com.acm.server.request.UpdateStatusRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

/**
 * Repository for the Team entity.
 * This interface provides CRUD operations, sorting and pagination functionality out of the box.
 *
 * @author Farid Masjedi
 * @see com.acm.server.domain.Team
 */
public interface TeamRepository extends JpaRepository<Team, Long> {
    @Modifying
    @Transactional
    @Query("update Team t set t.status = :#{#request.status} where t.id = :#{#request.teamId}")
    Integer updateStatus(UpdateStatusRequest request);

    Team getTeamByTeamName(String teamName);

    @Query(value = "SELECT EXISTS (SELECT 1 FROM Team t WHERE t.teamName = :name)")
    boolean isNameExist(@Param("name") String name);
}
