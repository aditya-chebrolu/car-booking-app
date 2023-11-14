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
public class AdminController {
	@Autowired
	private AdminService adminservice;

	
	@GetMapping("/user/dashboard")
	public List<AdminModel> findCompanies()
	{
		return adminservice.findCompanies();
	}
	
	@GetMapping("/companyDetails/{adminID}")
	public AdminModel getCompanyDetails(@PathVariable int adminID)
	{
		return adminservice.getCompanyDetails(adminID);
	}

	
	@GetMapping("/admin/profile/{id}")
	public AdminModel getProfile(@PathVariable int id) {
		return adminservice.getProfile(id);
	}

	@GetMapping("/admin/editProfile/{id}")
	public AdminModel getProfile2(@PathVariable int id) {
		return adminservice.getProfile(id);
	}

	@PostMapping("/admin/editProfile")
	public AdminModel editProfile(@RequestBody AdminModel data)
	{
		return adminservice.editAdmin(data);
	}

	
}
