package com.br.jornal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.jornal.model.Usuario;
import com.br.jornal.repository.UsuarioRepositorio;

@RestController
public class UsuarioController {
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @PostMapping("/registrarUsuario")
    public Usuario registrarUsuario(Usuario u){
        System.out.println(u);
        usuarioRepositorio.save(u);
        System.out.println(u.getCep());
        return u;
    }   
}
