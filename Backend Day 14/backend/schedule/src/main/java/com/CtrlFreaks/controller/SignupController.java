package com.CtrlFreaks.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.SignupModel;
import com.example.service.SignupService;


@RestController
@RequestMapping("/user")
public class SignupController {
	
	@Autowired
	public SignupService ss;
	
	@GetMapping("/getsignup")
	public List<SignupModel> getuserdetails()
	{
		return ss.getuserdetails();
	}
	
	@GetMapping("/getsignupById/{id}")
	public Optional<SignupModel> getuserByID(@PathVariable int signupid){
		return ss.getuserByID(signupid);
	}
	
	@PostMapping("/postsignup")
	public void postDetails(@RequestBody SignupModel sm) {
		ss.postDetails(sm);
	}
	
	@PutMapping("/putsignup/{id}")
	public void putDetails(@PathVariable int signupid, @RequestBody SignupModel sm){
		sm.setSid(signupid);
		ss.putDetails(sm);
	}
	
	@DeleteMapping("/deletesignupByid/{id}")
	public void deleteById(@PathVariable int signupid){
		ss.deletedetailsById(signupid);
	}
	
	
}
