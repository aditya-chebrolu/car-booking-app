package com.example;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingrepo;
	public BookingModel addBookingData(BookingModel data){
		return bookingrepo.save(data);
	}

	public List<BookingModel> getAllAdminBookings(int id){
		return bookingrepo.findByAdminID(id);
	}
	public List<BookingModel> getAllUserBookings(int id){
		return bookingrepo.findByUserID(id);
	}

    public List<BookingModel> add(List<BookingModel> bookings) {
		return bookingrepo.saveAll(bookings);
    }

    public int getTotalToday(int adminID) {
		Date today = new Date();
        try{
			int total=bookingrepo.findTotalToday(adminID,today);
			return total;
		}catch(Exception e)
		{
			return 0;
		}
    }

    public int getMonthTotal(int adminID) {
        try{
		Date date = new Date();
		LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
		int month = localDate.getMonthValue();
		return bookingrepo.findMonthTotal(adminID,month);
		}
		catch(Exception e){
			return 0;
		}
    }

	
}
