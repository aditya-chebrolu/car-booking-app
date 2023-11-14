package com.example;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SuperAdminRepository extends JpaRepository<SuperAdminModel,Integer> {

    @Query("select u from SuperAdminModel u where u.email=:e and u.password=:p")
    SuperAdminModel findByEmailAndPassword(@Param("e")String email,@Param("p") String pass);
    

}
