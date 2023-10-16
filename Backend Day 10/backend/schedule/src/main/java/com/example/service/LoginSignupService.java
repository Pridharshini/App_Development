package com.example.service;
import com.example.model.LoginSignup;
import com.example.repository.LoginSignupRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginSignupService {

	@Autowired
    private  LoginSignupRepo l_repo;

    public List<LoginSignup> getAllUsers() {
        return l_repo.findAll();
    }

    public LoginSignup getUserById(int id) {
        Optional<LoginSignup> userOptional = l_repo.findById(id);
        return userOptional.orElse(null);
    }

    public LoginSignup createUser(LoginSignup l) {
        return l_repo.save(l);
    }

    public LoginSignup updateUser(int id, LoginSignup updatedUser) {
        Optional<LoginSignup> existingUserOptional = l_repo.findById(id);

        if (existingUserOptional.isPresent()) {
            LoginSignup existingUser = existingUserOptional.get();

            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());

            return l_repo.save(existingUser);
        } else {
            return null; 
        }
    }

    public Optional<LoginSignup> findByUsername(String email) {
        return l_repo.findByEmail(email);
    }
    public void deleteUser(int id) {
        l_repo.deleteById(id);
    }
}
