package com.example;

import java.util.ArrayList;
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
public class UserController {
	
	@Autowired
	private UserService userservice;
	@Autowired
	private BookingService bookingservice;
	@Autowired
	private CarService carservice;
	@Autowired
	private AdminService adminservice;
	
	@GetMapping("/user/profile/{userID}")
	public UserModel getuserProfile(@PathVariable int userID)
	{
		return userservice.getuserProfile(userID);
	}

	@PostMapping("/user/editProfile")
	public UserModel userProfileEdit(@RequestBody UserModel user) {
		return userservice.userProfileEdit(user);
	}

	
	@GetMapping("user/bookings/{userID}")
	public List<UserBookings> getAllUserBookings(@PathVariable int userID)
	{
		List<BookingModel> bookings=bookingservice.getAllUserBookings(userID);
		List<UserBookings> lst=new ArrayList<UserBookings>();
		for(int i=0;i<bookings.size();i++)
		{
			String model=carservice.getCarModel(bookings.get(i).getCarID());
			String company=adminservice.getCompanyName(bookings.get(i).getAdminID());
			lst.add(new UserBookings(company,model));
		}
		return lst;
	}


}