package com.example;

public class UserBookings{
    private String companyName;
    private String model;

    public UserBookings(String companyName, String model) {
        this.companyName = companyName;
        this.model = model;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
    
}
