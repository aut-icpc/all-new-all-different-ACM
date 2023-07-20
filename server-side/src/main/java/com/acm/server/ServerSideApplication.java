package com.acm.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The main class for the ACM server-side application.
 * This class serves as the entry point for the application.
 * It initializes and starts the Spring Boot application.
 *
 * <p>The ACM server-side application is a backend system that provides various endpoints for managing ACM-related operations.
 * It offers the following endpoints:
 *
 * <ul>
 *   <li><b>/about:</b> This endpoint is used to retrieve and save information about the ACM organization.</li>
 *   <li><b>/countdown:</b> This endpoint is used to retrieve the countdown information for the event.</li>
 *   <li><b>/team:</b> This endpoint is used to create and retrieve information about teams participating in ACM events.</li>
 *   <!-- Add more endpoints and their descriptions here -->
 * </ul>
 *
 * <p>The application uses the Spring Boot framework to handle HTTP requests and responses. It leverages various services and DTOs
 * to manage the business logic and data transfer between the client and the server. The application is designed to be scalable,
 * maintainable, and secure, ensuring the smooth operation of ACM-related activities.
 *
 * @author Farid Masjedi
 */
@SpringBootApplication
public class ServerSideApplication {

	/**
	 * The main method that starts the ACM server-side application.
	 *
	 * @param args The command-line arguments passed to the application.
	 */
	public static void main(String[] args) {
		SpringApplication.run(ServerSideApplication.class, args);
	}

}
