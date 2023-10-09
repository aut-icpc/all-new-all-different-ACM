package com.acm.server.service;

import com.acm.server.model.dto.MailDto;

public interface MailService {
    MailDto saveMail(MailDto mailDto);
    Boolean isExist(String mail);
}
