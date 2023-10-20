package com.acm.server;

import org.junit.jupiter.api.Test;
import org.mockito.Spy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

class ACPCApplicationTests {

	PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


	@Test
	void encodePassword() {
		String password = "admin";
		System.out.println(passwordEncoder.encode(password));
	}

}
