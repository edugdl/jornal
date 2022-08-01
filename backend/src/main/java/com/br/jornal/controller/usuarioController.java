package com.br.jornal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.br.jornal.repository.UsuarioRepositorio;

@RestController
public class UsuarioController {
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;
}
