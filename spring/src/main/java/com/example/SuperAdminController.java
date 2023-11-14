package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:8081")	
@RestController
public class SuperAdminController {
    @Autowired
    private UserService userservice;
    @Autowired
	private AdminService adminservice;    
    @Autowired
	private CarService carservice;
    @Autowired
	private SuperAdminService superadminservice;    
    @Autowired
	private LoginService loginservice;


    @PostMapping("/super/deleteUser/{email}")
	public String deleteUser(@PathVariable String email) {
		userservice.deleteUser(email);
        loginservice.deleteUser(email);
        return "DELETED";
	}

    @PostMapping("/super/deleteAdmin/{email}")
    public String deleteAdmin(@PathVariable String email) {
        int id=adminservice.getId(email);
        adminservice.deleteAdmin(email);
        loginservice.deleteAdmin(email);
        carservice.deleteCompanyCars(id);
        return "DELETED";
    }

    @GetMapping("/superadmin/dashboard")
    public List<AdminModel> getAllAdmins(){
        return adminservice.getAdmins();
    }

    //extra
    @PostMapping("/superadmin")
    public SuperAdminModel addSuperAdmin(@RequestBody SuperAdminModel data)
    {
        data.setUserRole("superadmin");
        return superadminservice.addSuperAdmin(data);
    }
    
}
