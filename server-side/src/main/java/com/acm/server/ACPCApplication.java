package com.acm.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

/**
 * The main class for the ACPC server-side application.
 * This class serves as the entry point for the application.
 * It initializes and starts the Spring Boot application.
 *
 * <p>The ACM server-side application is a backend system that provides various endpoints for managing ACM-related operations.
 * You can see all endpoints information here <a href="http://localhost:8080/api/swagger-ui/index.html">...</a>
 *
 * <p>The application uses the Spring Boot framework to handle HTTP requests and responses. It leverages various services and DTOs
 * to manage the business logic and data transfer between the client and the server. The application is designed to be scalable,
 * maintainable, and secure, ensuring the smooth operation of ACM-related activities.
 *
 * @author Farid Masjedi
 * @since 2023
 * @version 0.0.1
 */
@SpringBootApplication
@EnableAsync
public class ACPCApplication {
    /**
     * The main method that starts the ACM server-side application.
     *
     * @param args The command-line arguments passed to the application.
     */
    public static void main(String[] args) {
        SpringApplication.run(ACPCApplication.class, args);
    }
}
