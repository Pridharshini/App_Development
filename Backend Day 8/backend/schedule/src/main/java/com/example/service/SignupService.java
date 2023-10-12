package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.model.SignupModel;
import com.example.repository.SignupRepository;



@org.springframework.stereotype.Service
public class SignupService {

	@Autowired
	private SignupRepository signuprepo;
	
	public List<SignupModel> getuserdetails(){
		return signuprepo.findAll();
	}
	
	public Optional<SignupModel> getuserByID(int loginid){
		return signuprepo.findById(loginid);
	}
	
	public void postDetails(SignupModel lm){
		signuprepo.save(lm);
	}
	
	public SignupModel putDetails(SignupModel lm) {
		return signuprepo.save(lm);
	}
	
	public void deletedetailsById(int loginid) {
		signuprepo.deleteById(loginid);
	}
	
}
