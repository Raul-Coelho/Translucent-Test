package com.translucent.gamecatalog.validator;
import com.translucent.gamecatalog.exceptions.GameNotCompleteException;
import com.translucent.gamecatalog.exceptions.InvalidDateException;
import com.translucent.gamecatalog.model.Game;
import java.time.LocalDate;

public class GameValidator {

    public void validate(Game game) {
        if (game.getYear() == null) {
            throw new InvalidDateException("Enter a valid date!");
        } else if (game.getDateOfCompletion() != null && game.getDateOfCompletion().isAfter(LocalDate.now())) {
            throw new InvalidDateException("That Date is Invalid!, Please insert a valid date!!");
        } else if (game.getCompleted() && game.getDateOfCompletion() == null) {
            throw new InvalidDateException("Enter a valid date!");
        } else if (!game.getCompleted() && game.getDateOfCompletion() != null) {
            throw new GameNotCompleteException("This game is not completed!");
        }
    }

}
