package com.example.springbootsuperheroes.superheroes.user.service;

import com.example.springbootsuperheroes.superheroes.exception.BadRequestException;
import com.example.springbootsuperheroes.superheroes.exception.NotFoundException;
import com.example.springbootsuperheroes.superheroes.user.data.UserDto;
import com.example.springbootsuperheroes.superheroes.user.entity.UserEntity;
import com.example.springbootsuperheroes.superheroes.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserService {

  private final UserRepository repo;
  private final ModelMapper mapper;

  public UserEntity searchByEmail(String email) {
    return repo.findByEmail(email);
  }

  public List<UserDto> findAllUsers() {
    var userEntityList = new ArrayList<>(repo.findAll());

    return userEntityList
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
  }

  public UserDto findUserById(final UUID id) {
    var user = repo
      .findById(id)
      .orElseThrow(
        () -> new NotFoundException("User by id " + id + " was not found")
      );

    return convertToDto(user);
  }

  public UserDto createUser(UserDto userDto, String password)
    throws NoSuchAlgorithmException {
    var user = convertToEntity(userDto);

    if (password.isBlank()) throw new IllegalArgumentException(
      "Password is required"
    );

    var existsEmail = repo.selectExistsEmail(user.getEmail());
    if (existsEmail) throw new   BadRequestException(
      "Email " + user.getEmail() + " taken"
    );

    byte[] salt = createSalt();
    byte[] hashedPassword = createPasswordHash(password, salt);

    user.setStoredSalt(salt);
    user.setStoredHash(hashedPassword);

    repo.save(user);

    return convertToDto(user);
  }

  public void updateUser(UUID id, UserDto userDto, String password)
    throws NoSuchAlgorithmException {
    var user = findOrThrow(id);
    var userParam = convertToEntity(userDto);

    user.setEmail(userParam.getEmail());
    user.setMobileNumber(userParam.getMobileNumber());

    if (!password.isBlank()) {
      byte[] salt = createSalt();
      byte[] hashedPassword = createPasswordHash(password, salt);

      user.setStoredSalt(salt);
      user.setStoredHash(hashedPassword);
    }

    repo.save(user);
  }

  public void removeUserById(UUID id) {
    findOrThrow(id);
    repo.deleteById(id);
  }

  private byte[] createSalt() {
    var random = new SecureRandom();
    var salt = new byte[128];
    random.nextBytes(salt);

    return salt;
  }

  private byte[] createPasswordHash(String password, byte[] salt)
    throws NoSuchAlgorithmException {
    var md = MessageDigest.getInstance("SHA-512");
    md.update(salt);

    return md.digest(password.getBytes(StandardCharsets.UTF_8));
  }

  private UserEntity findOrThrow(final UUID id) {
    return repo
      .findById(id)
      .orElseThrow(
        () -> new NotFoundException("User by id " + id + " was not found")
      );
  }

  private UserDto convertToDto(UserEntity entity) {
    return mapper.map(entity, UserDto.class);
  }

  private UserEntity convertToEntity(UserDto dto) {
    return mapper.map(dto, UserEntity.class);
  }
}
