package com.translucent.gamecatalog.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.lang.Nullable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    @Id
    @GeneratedValue
    private Integer id;

    private String title;
    @NotNull
    private LocalDate year;
    @NotNull
    private String console;
    @NotNull
    private Boolean completed;
    @Column(nullable = true)
    private LocalDate dateOfCompletion;
    @NotNull
    private String personalNotes;

}