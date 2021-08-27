package com.translucent.gamecatalog.controller;

import com.translucent.gamecatalog.model.Game;
import com.translucent.gamecatalog.service.GameService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("games")
@CrossOrigin(origins = "http://localhost:3000")
public class GameController {

    private final GameService gameService;

    @ApiOperation("New register for game, created")
    @ApiResponses({
            @ApiResponse(code = 201, message = "Return a empty body to represent success"),
            @ApiResponse(code = 400, message = "Any value passed is invalid"),
    })
    @PostMapping
    public ResponseEntity<Void> registerGame(@RequestBody Game game) {
        this.gameService.registerGame(game);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @ApiOperation("Get the list of the games")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Return the list of games"),
            @ApiResponse(code = 400, message = "Any value passed is invalid")
    })
    @GetMapping
    public ResponseEntity<List<Game>> findAll() {
        return ResponseEntity.ok(this.gameService.findAllByOrderByDateOfCompletionDesc());
    }

}

