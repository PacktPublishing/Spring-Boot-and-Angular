package com.example.springbootsuperheroes.superheroes.user.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

  private UUID id;

  private String email;
  private String mobileNumber;
  private String password;
}
