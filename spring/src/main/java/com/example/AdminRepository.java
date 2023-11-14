package com.example;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends JpaRepository<AdminModel,Integer> {

	@Query("select u from AdminModel u where u.email=:e and u.password=:p")
	AdminModel findByEmailAndPassword(@Param("e")String email,@Param("p") String pass);

	@Query("select new AdminModel(u.adminID,u.mobileNumber,u.companyName,u.companyAddress) from AdminModel u")
	List<AdminModel> findAllCompanies();

    AdminModel findByEmail(String email);

	@Query("select new AdminModel(a.adminID,a.mobileNumber,a.companyName,a.companyAddress) from AdminModel a where a.adminID=:id")
    AdminModel findCompany(@Param("id")Integer adminID);








}
