package com.example.springbootsuperheroes.superheroes.antiHero.h2.service;


import com.example.springbootsuperheroes.superheroes.antiHero.controller.AntiHeroController;
import com.example.springbootsuperheroes.superheroes.antiHero.entity.AntiHeroEntity;
import com.example.springbootsuperheroes.superheroes.antiHero.repository.AntiHeroRepository;
import com.example.springbootsuperheroes.superheroes.antiHero.service.AntiHeroService;
import com.example.springbootsuperheroes.superheroes.exception.NotFoundException;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DataJpaTest
public class AntiHeroH2ServiceTest {
    @Autowired
    private AntiHeroRepository repo;
    private AntiHeroService service;

    AntiHeroEntity antiHero = new AntiHeroEntity();

    @BeforeEach
    public void setup() {
        antiHero.setFirstName("Eddie");
        antiHero.setLastName("Brock");
        antiHero.setHouse("MCU");

        service = new AntiHeroService(repo);

    }
    @Test
    public void shouldFindAllAntiHero() {
        service.addAntiHero(antiHero);

        Iterable<AntiHeroEntity> antiHeroList = service.findAllAntiHeroes();
        AntiHeroEntity savedAntiHero = antiHeroList.iterator().next();

        assertThat(savedAntiHero).isNotNull();
    }
    @Test
    public void shouldAddAntiHero() {

        service.addAntiHero(antiHero);

        Iterable<AntiHeroEntity> antiHeroList = service.findAllAntiHeroes();
        AntiHeroEntity savedAntiHero = antiHeroList.iterator().next();

        assertThat(antiHero).isEqualTo(savedAntiHero);

    }

    @Test
    public void shouldUpdateAntiHero() {
        AntiHeroEntity savedAntiHero  = service.addAntiHero(antiHero);
        savedAntiHero.setHouse("San Francisco");

        service.updateAntiHero(savedAntiHero.getId(), savedAntiHero);
        AntiHeroEntity foundAntiHero = service.findAntiHeroById(savedAntiHero.getId());

        assertThat(foundAntiHero.getHouse()).isEqualTo("San Francisco");
    }

    @Test
    public void shouldDeleteAntiHero() {
        assertThrows(NotFoundException.class, new Executable() {
            @Override
            public void execute() throws Throwable {
                AntiHeroEntity savedAntiHero  = service.addAntiHero(antiHero);

                service.removeAntiHeroById(savedAntiHero.getId());
                AntiHeroEntity foundAntiHero = service.findAntiHeroById(savedAntiHero.getId());

                assertThat(foundAntiHero).isNull();
            }
        });
    }

    @Test
    public void shouldFindAntiHeroById() {
        AntiHeroEntity savedAntiHero  = service.addAntiHero(antiHero);

        AntiHeroEntity foundAntiHero = service.findAntiHeroById(savedAntiHero.getId());
        assertThat(foundAntiHero).isNotNull();

    }

    @Test
    public void shouldNotFindAntiHeroById() {
        assertThrows(NotFoundException.class, new Executable() {
            @Override
            public void execute() throws Throwable {
                AntiHeroEntity foundAntiHero = service.findAntiHeroById(UUID.randomUUID());
                assertThat(foundAntiHero).isNull();
            }
        });

    }



}
