package com.acm.server.repository;

import com.acm.server.domain.AboutUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository for the AboutUs entity.
 * This interface provides CRUD operations, sorting and pagination functionality out of the box.
 * @see com.acm.server.domain.AboutUs
 * @author Farid Majsedi
 */
@Repository
public interface AboutUsRepository extends JpaRepository<AboutUs, Long> {
}
