package com.br.jornal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.jornal.model.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario,Long> {
    Optional<Usuario> findByemail(String email);
}
