package com.example;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;
public interface CarRepository extends JpaRepository<CarModel,Integer>{

	List<CarModel> findALLCarsByAdminID(@Param("ID")int adminID);

	@Query("select c.model from CarModel c where c.carID=:cid")
    String findModel(@Param("cid")Integer carID);

    @Query("delete from CarModel c where c.adminID=:id")
    void deletecars(@Param("id")int adminID);
}
