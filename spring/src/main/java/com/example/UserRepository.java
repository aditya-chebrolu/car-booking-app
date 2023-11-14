package com.example;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<UserModel,Integer>{

	@Query("select u from UserModel u where u.email=:e and u.password=:p")
	UserModel findByEmailAndPassword(@Param("e")String email,@Param("p") String pass);

    UserModel findByEmail(String email);

    
	
	

}
