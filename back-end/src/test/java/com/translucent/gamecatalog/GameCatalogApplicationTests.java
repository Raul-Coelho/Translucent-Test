package com.translucent.gamecatalog;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.translucent.gamecatalog.controller.HomeController;
import com.translucent.gamecatalog.exceptions.GameNotCompleteException;
import com.translucent.gamecatalog.exceptions.InvalidDateException;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import com.translucent.gamecatalog.service.GameService;
import com.translucent.gamecatalog.validator.GameValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;
import org.springframework.http.MediaType;

import java.time.LocalDate;

@SpringBootTest
@AutoConfigureMockMvc
class GameCatalogApplicationTests {

	private static final String API_URL = "/gamesCatalog";

	private final GameRepository gameRepository = Mockito.mock(GameRepository.class);

	private final GameValidator gameValidator = Mockito.mock(GameValidator.class);

	private GameService gameService;

	@BeforeEach
	void initUseCase() {
		this.gameService = new GameService(gameRepository, gameValidator);
	}

	@Autowired
	protected MockMvc mockMvc;

	@Autowired
	private HomeController controller;

	@Test
	public void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
	}

	@Test
	@DisplayName("Fetch games")
	public void fetchGames() throws Exception {
		mockMvc.perform(get(API_URL).contentType("application/json")).andExpect(status().isOk());
	}

	@Test
	@DisplayName("Registering game with perfect case, and all full attributes")
	void registerNewGameFullSuccess() {
		Game game = new Game(
				1,
				"Horizon Zero Down",
				LocalDate.of(2017,2,28),
				"PS4",
				true,
				LocalDate.of(2019, 5, 11),
				"This game is awesome"
		);

		when(gameRepository.save(any(Game.class))).then(returnsFirstArg());
		doNothing().when(gameValidator).validate(any(Game.class));

		assertDoesNotThrow(() -> {
			this.gameService.registerGame(game);
		});
	}

	@Test
	@DisplayName("Registering game with future end date")
	void registerNewGameFutureDate() {
		Game game = new Game(
				1,
				"Horizon Zero Down",
				LocalDate.of(2017,2,28),
				"PS4",
				true,
				LocalDate.of(2021, 5, 11),
				"This game is awesome"
		);

		when(gameRepository.save(any(Game.class))).then(returnsFirstArg());
		doThrow(new InvalidDateException("Please, enter a valid date !")).when(gameValidator).validate(any(Game.class));

		assertThrows(InvalidDateException.class, () -> {
			this.gameService.registerGame(game);
		});
	}

	@Test
	@DisplayName("Registering game with no game end date")
	void registerNewGameCompletedNoDateOfCompletion() {
		Game game = new Game(
				1,
				"Horizon Zero Down",
				LocalDate.of(2017,2,28),
				"PS4",
				true,
				null,
				"This game is awesome"
		);

		when(gameRepository.save(any(Game.class))).then(returnsFirstArg());
		doThrow(new InvalidDateException("Please, enter a valid date!")).when(gameValidator).validate(any(Game.class));

		assertThrows(InvalidDateException.class, () -> {
			this.gameService.registerGame(game);
		});
	}
}
