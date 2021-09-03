package com.translucent.gamecatalog;

import com.translucent.gamecatalog.validator.GameValidator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class GameCatalogApplication {
	public static void main(String[] args) {
		SpringApplication.run(GameCatalogApplication.class, args);
	}

	@Bean
	public GameValidator getGameValidator() {
		return new GameValidator();
	}

}
