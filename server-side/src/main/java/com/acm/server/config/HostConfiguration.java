package com.acm.server.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "acpc.host")
public class HostConfiguration {
    private String name;
    private String port;
}
