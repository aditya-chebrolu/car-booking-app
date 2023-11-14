package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuperAdminService {
    @Autowired 
    private SuperAdminRepository repo;

    public SuperAdminModel findSuperAdmin(LoginModel data) {
        String email=data.getEmail();
		String pass=data.getPassword();
		return repo.findByEmailAndPassword(email,pass);
    }

    public SuperAdminModel addSuperAdmin(SuperAdminModel data) {
        return repo.save(data);
    }


}
