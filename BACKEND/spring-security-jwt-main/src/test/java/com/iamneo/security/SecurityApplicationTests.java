package com.iamneo.security;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@SpringBootTest
@Configuration
class SecurityApplicationTests {

	@Test
	void contextLoads() {
	}
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}

