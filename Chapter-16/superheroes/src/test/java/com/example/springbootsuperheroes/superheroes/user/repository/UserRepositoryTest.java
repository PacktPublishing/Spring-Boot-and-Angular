package com.example.springbootsuperheroes.superheroes.user.repository;

import com.example.springbootsuperheroes.superheroes.user.entity.UserEntity;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void itShouldCheckWhenUserEmailExists() {
        // give
        String email = "dennis@gmail.com";
        UserEntity user = new UserEntity(email, "21398732478");

        underTest.save(user);

        // when
        boolean expected = underTest.selectExistsEmail(email);

        // then
        assertThat(expected).isTrue();
    }

    @Test
    void itShouldFindUserWhenEmailExists() {
        // give
        String email = "dennis@gmail.com";
        UserEntity user = new UserEntity(email, "21398732478");

        underTest.save(user);

        // when
        UserEntity expected = underTest.findByEmail(email);

        // then
        assertThat(expected).isEqualTo(user);
    }

    @Test
    void itShouldCheckWhenUserEmailDoesNotExists() {
        // given
        String email = "dennis@gmail.com";

        // when
        boolean expected = underTest.selectExistsEmail(email);

        // then
        assertThat(expected).isFalse();
    }
}