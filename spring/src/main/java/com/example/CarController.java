package com.example;

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
public class CarController {
	
	@Autowired
	private CarService carservice;
	
	@PostMapping("/admin/addCar")
	public String saveCar(@RequestBody CarModel data) {
		data.setStatus("Available");
		return carservice.saveCar(data);
	}
	
	@GetMapping("/admin/editCar/{carID}")
	public CarModel getCarDetails(@PathVariable int carID) {
		return carservice.carDetails(carID);
	}
	
	@PostMapping("/admin/editCar")
	public String editCar(@RequestBody CarModel data) {
		return carservice.editCar(data);
	}
	
	@PostMapping("/admin/deleteCar/{CarID}")
	public String deleteCar(@PathVariable int CarID) {
		return carservice.deleteCar(CarID);
	}

	@GetMapping("/user/Cars/{adminId}")
	public List<CarModel> getCompanyCars(@PathVariable int adminId)
	{
		return carservice.findAllCars(adminId);
	}

	@GetMapping("user/CarDetails/{CarID}")
	public CarModel carDetails(@PathVariable int CarID) {
		return carservice.carDetails(CarID);
	}
	
	@GetMapping("admin/dashboard/{adminID}")
	public List<CarModel> getCarsByAdminId(@PathVariable int adminID){
		return carservice.findAllCars(adminID);
	}

}
