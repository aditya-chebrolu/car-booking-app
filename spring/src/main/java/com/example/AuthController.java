package com.example;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:8081")	
@RestController
public class AuthController {
	@Autowired
	private LoginService loginservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private AdminService adminservice;
	@Autowired
	private SuperAdminService superadminservice;

	
	
	@PostMapping("user/login")
	public boolean isUserPresent(@RequestBody LoginModel data)
	{
		if(userservice.findUser(data)==null)
			return false;
		return true;
	}
	
	@PostMapping("admin/login")
	public boolean isAdminPresent(@RequestBody LoginModel data)
	{
		if(adminservice.findAdmin(data)==null)
			return false;
		return true;
		
	}
	
	@PostMapping("superadmin/login")
	public boolean isSuperAdminPresent(@RequestBody LoginModel data)
	{
		if(superadminservice.findSuperAdmin(data)==null)
			return false;
		return true;
		
	}
	
	@PostMapping("/user/signup")
	public String saveUser(@RequestBody UserModel data)
	{
		if(loginservice.check(data.getEmail())!=null)
			return "USER ALREADY EXISTS";

		userservice.addUser(data);
		LoginModel obj=new LoginModel(data.getEmail(),data.getPassword());
		loginservice.addLoginInfo(obj);
		return "USER ADDED";
	}
		
		
	@PostMapping("/admin/signup")
	public String saveAdmin(@RequestBody AdminModel data)
	{
		if(loginservice.check(data.getEmail())!=null)
			return "USER ALREADY EXISTS";

		adminservice.addAdmin(data);
		LoginModel obj=new LoginModel(data.getEmail(),data.getPassword());
		loginservice.addLoginInfo(obj);
		return "ADMIN ADDED";
	}

	@GetMapping("/admin/{email}")
	public int getuserId(@PathVariable String email)
	{
		return adminservice.getId(email);
	}
	
	@GetMapping("/user/{email}")
	public int getadminId(@PathVariable String email)
	{
		return userservice.getId(email);
	}
	

}
