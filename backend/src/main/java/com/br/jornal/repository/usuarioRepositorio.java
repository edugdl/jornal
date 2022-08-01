package com.br.jornal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.jornal.model.usuario;

@Repository
public interface usuarioRepositorio extends JpaRepository<usuario,Long> {
    
}
