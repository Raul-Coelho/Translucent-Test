package com.translucent.gamecatalog;

import com.translucent.gamecatalog.exceptions.InvalidDateException;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import com.translucent.gamecatalog.service.GameService;
import com.translucent.gamecatalog.validator.GameValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.mockito.AdditionalAnswers.returnsFirstArg;
import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.any;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;


import java.time.LocalDate;
import java.util.Arrays;

class GameCatalogApplicationTests {

	private static final String API_URL = "/gamesCatalog";

	private final GameRepository gameRepository = Mockito.mock(GameRepository.class);

	private final GameValidator gameValidator = Mockito.mock(GameValidator.class);

	private GameService gameService;

	@BeforeEach
	void initUseCase() {
		this.gameService = new GameService(gameRepository, gameValidator);
	}

	@Test
	@DisplayName("Fetch games")
	public void fetchGames() throws Exception {
		when(gameRepository.findAllByOrderByDateOfCompletionDesc()).thenReturn(Arrays.asList(
				new Game(null,"Metal Gear Solid 2", LocalDate.of(2001, 8 ,7), "PS2", true, LocalDate.of(2017, 8 ,7), " I really liked this game. A masterpiece from Kojima productions."),
				new Game(null,"Metal Gear Solid 3", LocalDate.of(2001, 8 ,7), "PS2", true, LocalDate.of(2017, 8 ,7), " I really liked this game. A masterpiece from Kojima productions.")
		));
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
