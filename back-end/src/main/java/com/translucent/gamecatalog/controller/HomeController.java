package com.translucent.gamecatalog.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping
    public @ResponseBody
    String greeting() {
        return "Hello, World";
    }

}