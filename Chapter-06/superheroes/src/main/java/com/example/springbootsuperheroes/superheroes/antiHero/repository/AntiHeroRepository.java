package com.example.springbootsuperheroes.superheroes.antiHero.repository;

import com.example.springbootsuperheroes.superheroes.antiHero.entity.AntiHeroEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface AntiHeroRepository extends CrudRepository<AntiHeroEntity, UUID> {
}
