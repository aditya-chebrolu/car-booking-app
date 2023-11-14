package com.example;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SuperAdminModel")
public class SuperAdminModel {
    
    @Id
    @GeneratedValue
    private int superadminID;
	private String email;
	private String password;
    private String userRole;
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
    public int getSuperadminID() {
        return superadminID;
    }
    public void setSuperadminID(int superadminID) {
        this.superadminID = superadminID;
    }
    public String getUserRole() {
        return userRole;
    }
    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    
}
