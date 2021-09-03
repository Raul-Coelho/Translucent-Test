package com.translucent.gamecatalog.service;
import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.repository.GameRepository;
import com.translucent.gamecatalog.validator.GameValidator;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class GameService {

    private final GameRepository repository;
    private final GameValidator validator;

    public Game registerGame(Game game) {
        validator.validate(game);
        this.repository.save(game);
        return game;
    }

    public List<Game> findAll(){
        return this.repository.findAllByOrderByDateOfCompletionDesc();
    }

}
