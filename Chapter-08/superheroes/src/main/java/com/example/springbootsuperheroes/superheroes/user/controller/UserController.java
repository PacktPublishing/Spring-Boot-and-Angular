package com.example.springbootsuperheroes.superheroes.user.controller;

import com.example.springbootsuperheroes.superheroes.user.data.UserDto;
import com.example.springbootsuperheroes.superheroes.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

@Log4j2
@AllArgsConstructor
@RestController
public class UserController {

  private final UserService userService;

  @GetMapping("/api/v1/users")
  public Iterable<UserDto> getUsers() {
    return userService.findAllUsers();
  }

  @GetMapping("/api/v1/users/{id}")
  public UserDto getUserById(@PathVariable("id") UUID id) {
    return userService.findUserById(id);
  }

  @DeleteMapping("/api/v1/users/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteUserById(@PathVariable("id") UUID id) {
    userService.removeUserById(id);
  }

  @PostMapping("/register")
  @ResponseStatus(HttpStatus.CREATED)
  public UserDto postUser(@Valid @RequestBody UserDto userDto)
    throws NoSuchAlgorithmException {
    return userService.createUser(userDto, userDto.getPassword());
  }

  @PutMapping("/api/v1/users/{id}")
  public void putUser(
    @PathVariable("id") UUID id,
    @Valid @RequestBody UserDto userDto
  ) throws NoSuchAlgorithmException {
    userService.updateUser(id, userDto, userDto.getPassword());
  }
}
