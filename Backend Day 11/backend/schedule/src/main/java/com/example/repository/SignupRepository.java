package com.example.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.SignupModel;



public interface SignupRepository extends JpaRepository<SignupModel, Integer>{

}
