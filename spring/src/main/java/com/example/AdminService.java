package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	@Autowired
	private AdminRepository adminrepo;
	
	public void addAdmin(AdminModel data)
	{
		adminrepo.save(data);
	}
	
	public AdminModel findAdmin(LoginModel data)
	{
		String email=data.getEmail();
		String pass=data.getPassword();
		return adminrepo.findByEmailAndPassword(email,pass);
	}
	
	
	public List<AdminModel> findCompanies()
	{
		return adminrepo.findAllCompanies();
	}

	public AdminModel getProfile(int id) {
		return adminrepo.findById(id).orElse(null);
	}
	
	public AdminModel editAdmin(AdminModel data) {
		int id=data.getadminID();
		AdminModel admin=adminrepo.findById(id).orElse(null);
		admin.setPassword(data.getPassword());
		admin.setEmail(data.getEmail());
		admin.setMobileNumber(data.getMobileNumber());
		admin.setSellerName(data.getSellerName());
		admin.setCompanyName(data.getCompanyName());
		admin.setCompanyAddress(data.getCompanyAddress());

		return adminrepo.save(admin);
	}
	
	public String deleteAdmin(String email) {
		AdminModel admin=adminrepo.findByEmail(email);
		adminrepo.delete(admin);
		return "Admin Deleted";
	}

	public int getId(String email) {
        return (adminrepo.findByEmail(email)).getadminID();
	}

	public String getCompanyName(Integer adminID) {
        return (adminrepo.findCompany(adminID)).getCompanyName();
    }

	public List<AdminModel> getAdmins() {
        return adminrepo.findAll();
    }

	public AdminModel getCompanyDetails(int adminID) {
        return adminrepo.findCompany(adminID);
    }
    


}
