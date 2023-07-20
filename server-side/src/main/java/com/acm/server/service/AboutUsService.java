package com.acm.server.service;

import com.acm.server.model.dto.AboutUsDto;

import java.util.List;

/**
 * @author Farid Masjedi
 * description: This interface is the service for the countdown
 * @see com.acm.server.service.impl.AboutUsServiceImpl
 */

public interface AboutUsService {
    List<AboutUsDto> getAboutUs();

    AboutUsDto saveAboutUs(AboutUsDto aboutUs);
}
