package com.translucent.gamecatalog;

import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import com.translucent.gamecatalog.validator.GameValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDate;
import java.util.Arrays;

@SpringBootApplication
@CrossOrigin
public class GameCatalogApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(GameCatalogApplication.class, args);
	}

	@Autowired
	private GameRepository gameRepository;

	@Bean
	public GameValidator getGameValidator() {
		return new GameValidator();
	}

	@Override
	public void run(String... args) throws Exception {
		Game metal = new Game( null,"Metal Gear Solid 2", LocalDate.of(2001, 8 ,7), "PS2", true, LocalDate.of(2017, 8 ,7), " I really liked this game. A masterpiece from Kojima productions.");
		Game horizon = new Game(null, "Horizon Zero Down", LocalDate.of(2017, 2 ,28), "PS4", true, LocalDate.of(2019, 5 ,25), "Most beautiful game I've ever played in my life");
		gameRepository.saveAll(Arrays.asList(metal, horizon));
	}

}
