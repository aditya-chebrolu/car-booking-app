package com.example;

import java.util.ArrayList;
import java.util.Date;
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
public class BookingController {

	@Autowired
	private BookingService bookingservice;
	@Autowired
	private CarService carservice;

	@PostMapping("user/bookcar")
	public BookingModel bookCar(@RequestBody BookingModel data)
	{
		Date today = new Date();				
		data.setBookedDate(today);
		carservice.changeStatus(data.getCarID());
		return bookingservice.addBookingData(data);
	}
	
	@GetMapping("admin/bookings/{id}")
	public List<AdminBookings> getAllAdminBookings(@PathVariable int id){
		List<BookingModel> bookings=bookingservice.getAllAdminBookings(id);
		List<AdminBookings> lst=new ArrayList<AdminBookings>();
		for(int i=0;i<bookings.size();i++)
		{
			String model=carservice.getCarModel(bookings.get(i).getCarID());
			int bookingID=bookings.get(i).getBookingID();
			int userID=bookings.get(i).getUserID();
			lst.add(new AdminBookings(bookingID,userID,model));
		}
		return lst;
	}


	@PostMapping("/bookings")
	public List<BookingModel> add(@RequestBody List<BookingModel> data)
	{
		Date today = new Date();	
		for(BookingModel obj:data)
			obj.setBookedDate(today);
		return bookingservice.add(data);
	}

	@GetMapping("/total/today/{adminID}")
	public int getTotalToday(@PathVariable int adminID)
	{
		return bookingservice.getTotalToday(adminID);
	}

	@GetMapping("/total/month/{adminID}")
	public int getMonthTotal(@PathVariable int adminID)
	{
		return bookingservice.getMonthTotal(adminID);
	}
}
