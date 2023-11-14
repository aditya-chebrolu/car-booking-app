package com.example;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookingRepository extends JpaRepository<BookingModel,Integer>{

    List<BookingModel> findByAdminID(int id);

    List<BookingModel> findByUserID(int userID);

    @Query("select b.carID from BookingModel b where b.userID=:uid")
    List<Integer> findCarID(@Param("uid")int userID);

    @Query("select b.adminID from BookingModel b where b.userID=:uid")
    List<Integer> findAdminID(@Param("uid")int userID);

    @Query("select sum(b.rent) from BookingModel b where b.adminID=:id and b.bookedDate=:date")
    int findTotalToday(@Param("id")int adminID,@Param("date")Date today);

    @Query("select sum(b.rent) from BookingModel b where b.adminID=:id and extract(month from b.bookedDate)=:month")
    int findMonthTotal(@Param("id")int adminID,@Param("month")int month);
   

}
