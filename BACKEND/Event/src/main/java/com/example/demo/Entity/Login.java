package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue
	@Column(name="id")
    private int id;
	@Column(name="mail")
	private String mail;
	@Column(name="name")
	private String name;
	@Column(name="password")
	private String password;
	
}
