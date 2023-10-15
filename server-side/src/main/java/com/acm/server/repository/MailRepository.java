package com.acm.server.repository;

import com.acm.server.domain.Mail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MailRepository extends JpaRepository<Mail, Long> {
    Boolean existsMailByValue(String value);
}
