package com.acm.server.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Configuration class for host properties.
 * This class holds the host-related configuration properties used by the application.
 * The properties are loaded from the application configuration file using the @ConfigurationProperties annotation.
 * The prefix "acpc.host" is used to specify the section of the configuration file from which the properties will be loaded.
 *
 * The @Data annotation is used to generate getter and setter methods for the properties.
 * The @Component annotation marks this class as a Spring component, allowing it to be automatically detected and instantiated
 * by the Spring container.
 *
 * @author Farid Masjedi
 */
@Data
@Component
@ConfigurationProperties(prefix = "acpc.host")
public class HostConfiguration {
    private String name;
    private String port;
    private String uploadBaseDir;
}
