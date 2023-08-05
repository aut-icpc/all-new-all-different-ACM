package com.acm.server.repository;

import com.acm.server.domain.RegistrationTerms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationTermsRepository extends JpaRepository<RegistrationTerms, Long> {
}
