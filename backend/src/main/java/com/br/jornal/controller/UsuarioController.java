package com.br.jornal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.br.jornal.repository.UsuarioRepositorio;

@RestController
@CrossOrigin
public class UsuarioController {
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @GetMapping("/registrarUsuario")
    public String registrarUsuario(@RequestParam(name = "nome") String nome){
        System.out.println(nome);
        return nome;
    }   
}
