package com.translucent.gamecatalog.repository;

import com.translucent.gamecatalog.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {

    List<Game> findAllByOrderByDateOfCompletionDesc();

}
