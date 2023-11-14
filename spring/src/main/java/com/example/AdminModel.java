package com.example;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;

@Entity
@Table(name="AdminModel")
public class AdminModel {
	
	@Id
	@GeneratedValue
	private int adminID;
	private String email;
	private String password;
	private String mobileNumber;
	private String sellerName;
	private String userRole;
	private String companyName;
	private String companyImageURL;
	private String companyAddress;
	private int earnings;

	public AdminModel() {}
	public AdminModel(int adminID,String mobileNumber, String companyName, String companyAddress) {
		super();
		this.adminID = adminID;
		this.mobileNumber = mobileNumber;
		this.companyName = companyName;
		this.companyAddress = companyAddress;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getSellerName() {
		return sellerName;
	}
	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String comapanyName) {
		this.companyName = comapanyName;
	}
	public String getCompanyImageURL() {
		return companyImageURL;
	}
	public void setCompanyImageURL(String companyImageURL) {
		this.companyImageURL = companyImageURL;
	}
	public String getCompanyAddress() {
		return companyAddress;
	}
	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}
	public int getEarnings() {
		return earnings;
	}
	public void setEarnings(int earnings) {
		this.earnings = earnings;
	}
	public int getadminID() {
		return adminID;
	}
	public void setId(int adminID) {
		this.adminID = adminID;
	}
	
	
}
