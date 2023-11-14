package com.example;

public class AdminBookings {
    private int bookingID;
    private int userID;
    private String model;
    
    public AdminBookings(int bookingID, int userID, String model) {
        this.bookingID = bookingID;
        this.userID = userID;
        this.model = model;
    }
    
    public int getBookingID() {
        return bookingID;
    }
    public void setBookingID(int bookingID) {
        this.bookingID = bookingID;
    }
    public int getUserID() {
        return userID;
    }
    public void setUserID(int userID) {
        this.userID = userID;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    
    
}
