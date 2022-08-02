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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.br.jornal.model.Usuario;
import com.br.jornal.repository.UsuarioRepositorio;

@RestController
@CrossOrigin
@RequestMapping("/usuario")
public class UsuarioController {
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    @GetMapping("/buscarTodos")
    public List<Usuario> registrarUsuario(){
        return usuarioRepositorio.findAll();
    }
    
    @GetMapping("/buscar/{id}")
    public Usuario buscarUsuario(@PathVariable Long id){
        Optional<Usuario> u = usuarioRepositorio.findById(id);
        if(u.isEmpty()){
            return null;
        }
        return u.get();
    }
    
    @PostMapping("/cadastrar")
    public Usuario cadastrarUsuario(Usuario u){
        usuarioRepositorio.save(u);
        return u;
    }
    
    @PatchMapping("/atualizar")
    public Usuario atualizarUsuario(Usuario u){
        usuarioRepositorio.saveAndFlush(u);
        return u;
    }
    
    @DeleteMapping("/deletar/{id}")
    public String deletarUsuario(@PathVariable Long id){
        Optional<Usuario> u = usuarioRepositorio.findById(id);
        if(u.isEmpty()){
            return "Usuario não encontrado";
        }
        usuarioRepositorio.deleteById(id);
        return "Usuário deletado com sucesso!";
    }

    @PostMapping("/login")
    public Usuario login(@RequestParam String email, @RequestParam String senha){
        Optional<Usuario> u = usuarioRepositorio.findByemail(email);
        if(u.isEmpty()){
            return null;
        }
        if(!u.get().getSenha().equals(senha)){
            return null;
        }
        return u.get();
    }

    // @PostMapping("/teste")
    // public ResponseEntity<Usuario> create(@RequestBody Usuario u) 
    //     throws URISyntaxException {
    //     Usuario createdUser = usuarioRepositorio.save(u);
    //     if (createdUser == null) {
    //         return ResponseEntity.notFound().build();
    //     } else {
    //         URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
    //           .path("/{id}")
    //           .buildAndExpand(createdUser.getId())
    //           .toUri();
    
    //         return ResponseEntity.created(uri)
    //           .body(createdUser);
    //     }
    // }
}
