package com.br.jornal.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.br.jornal.model.Usuario;
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
    public Usuario cadastrarUsuario(@RequestBody Usuario u){
        usuarioRepositorio.save(u);
        return u;
    }
    
    @PatchMapping("/atualizarUsuario")
    public Usuario atualizarUsuario(Usuario u){
        usuarioRepositorio.saveAndFlush(u);
        return u;
    }
    
    @DeleteMapping("/deletarUsuario/{id}")
    public String deletarUsuario(@PathVariable Long id){
        Optional<Usuario> u = usuarioRepositorio.findById(id);
        if(u.isEmpty()){
            return "Usuario não encontrado";
        }
        usuarioRepositorio.deleteById(id);
        return "Usuário deletado com sucesso!";
    }

    // Não entendo metade do que tá rolando aqui
    @PostMapping("/teste")
    // Acho que esse response entity serve pra dar um código de resposta pro cliente
    public ResponseEntity<Usuario> create(@RequestBody Usuario u) 
        throws URISyntaxException {
        Usuario createdUser = usuarioRepositorio.save(u);
        if (createdUser == null) {
            return ResponseEntity.notFound().build();
        } else {
            // ??????????
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
              .path("/{id}")
              .buildAndExpand(createdUser.getId())
              .toUri();
    
            return ResponseEntity.created(uri)
              .body(createdUser);
        }
    }
}
