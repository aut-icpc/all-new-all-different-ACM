package com.acm.server;

import com.acm.server.request.SignUpRequest;
import com.acm.server.service.AuthenticationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootTest
class ACPCApplicationTests {

	@Autowired
	PasswordEncoder passwordEncoder;


	@Test
	void encodePassword() {
		String password = "admin";
		System.out.println(passwordEncoder.encode(password));
	}

}
