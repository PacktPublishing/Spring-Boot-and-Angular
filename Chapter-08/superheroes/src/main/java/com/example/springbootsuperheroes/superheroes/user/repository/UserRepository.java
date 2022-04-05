package com.example.springbootsuperheroes.superheroes.user.repository;

import com.example.springbootsuperheroes.superheroes.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, UUID> {
  @Query(
    "" +
    "SELECT CASE WHEN COUNT(u) > 0 THEN " +
    "TRUE ELSE FALSE END " +
    "FROM UserEntity u " +
    "WHERE u.email = ?1"
  )
  Boolean selectExistsEmail(String email);

  // @Column(unique = true) is needed in entity
  UserEntity findByEmail(String email);
}
