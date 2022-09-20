package com.example.springbootsuperheroes.superheroes.antiHero.service;

import com.example.springbootsuperheroes.superheroes.antiHero.repository.AntiHeroRepository;
import com.example.springbootsuperheroes.superheroes.antiHero.entity.AntiHeroEntity;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class AntiHeroServiceTest {

    @Mock
    private AntiHeroRepository antiHeroRepository;

    @InjectMocks
    private AntiHeroService underTest;


    @Test
    void canFindAllAntiHeroes() {
        // when
        underTest.findAllAntiHeroes();
        // then
        verify(antiHeroRepository).findAll();
    }

    @Test
    void canAddAntiHero() {
        // given
        AntiHeroEntity antiHero = new AntiHeroEntity(
                UUID.randomUUID(),
                "Bunao",
                "Lakandula",
                "Tondo",
                "Datu of Tondo",
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z").format(new Date())
        );

        // when
        underTest.addAntiHero(antiHero);

        // then
        ArgumentCaptor<AntiHeroEntity> antiHeroDtoArgumentCaptor = ArgumentCaptor.forClass(
                AntiHeroEntity.class
        );
        verify(antiHeroRepository).save(antiHeroDtoArgumentCaptor.capture());
        AntiHeroEntity capturedAntiHero = antiHeroDtoArgumentCaptor.getValue();

        assertThat(capturedAntiHero).isEqualTo(antiHero);
    }
}