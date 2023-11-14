package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
	@Autowired
	private LoginRepository loginrepo;
	
	
	public void addLoginInfo(LoginModel data)
	{
		loginrepo.save(data);
	}
	
	public LoginModel check(String email)
	{
		return loginrepo.findById(email).orElse(null);
	}

    public List<LoginModel> getAccounts() {
        return loginrepo.findAll();
    }

	public void deleteAdmin(String email) {
		loginrepo.deleteById(email);
	}

	public void deleteUser(String email) {
		loginrepo.deleteById(email);
	}




}
