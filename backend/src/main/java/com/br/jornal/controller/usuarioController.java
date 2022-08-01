package com.br.jornal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.br.jornal.repository.usuarioRepositorio;

@RestController
public class usuarioController {
    
    @Autowired
    usuarioRepositorio usuarioRepositorio;
}
