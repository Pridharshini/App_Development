package com.example.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.model.LoginSignup;




public interface LoginSignupRepo extends JpaRepository<LoginSignup, Integer> {
	
}