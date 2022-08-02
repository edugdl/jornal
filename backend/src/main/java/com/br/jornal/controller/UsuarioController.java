package com.br.jornal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.br.jornal.repository.UsuarioRepositorio;

@RestController
@CrossOrigin
public class UsuarioController {
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @GetMapping("/buscarUsuarios")
    public List<Usuario> registrarUsuario(){
        return usuarioRepositorio.findAll();
    }
    
    @GetMapping("/buscarUsuario/{id}")
    public Usuario buscarUsuario(@PathVariable Long id){
        Optional<Usuario> u = usuarioRepositorio.findById(id);
        if(u.isEmpty()){
            return null;
        }
        return u.get();
    }

    @PostMapping("/cadastrarUsuario")
    public Usuario cadastrarUsuario(Usuario u){
        usuarioRepositorio.save(u);
        return u;
    }

    @PatchMapping("/atualizarUsuario")
    public Usuario atualizarUsuario(Usuario u){
        usuarioRepositorio.save(u);
        return u;
    }

    @DeleteMapping("/deletarUsuario/{id}")
    public void deletarUsuario(@PathVariable Long id){
        usuarioRepositorio.deleteById(id);
    }
}
