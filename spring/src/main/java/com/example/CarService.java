package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CarService {
	
	@Autowired
	private CarRepository carrepo;
	
	public String editCar(CarModel data) {
		int id=data.getCarID();
		CarModel car=carrepo.findById(id).orElse(null);
		car.setModel(data.getModel());
		car.setPrice(data.getPrice());
		car.setType(data.getType());
		carrepo.save(car);
		return "Car Edited";
	}
	
	public String saveCar(CarModel data) {
		carrepo.save(data);
		return "Car Added";
	}
	
	public String deleteCar(int CarID) {
		carrepo.deleteById(CarID);
		return "Car Deleted";
	}

	public CarModel carDetails(int CarID) {
		return carrepo.findById(CarID).orElse(null);
	}

	public List<CarModel> findAllCars(int adminID){
		return carrepo.findALLCarsByAdminID(adminID);
	}

	public void changeStatus(int carID) {
		CarModel car=carrepo.findById(carID).orElse(null);
		car.setStatus("Booked");
		carrepo.save(car);
    }

	public void deleteCompanyCars(int adminID) {
		List<CarModel> cars=carrepo.findALLCarsByAdminID(adminID);
		carrepo.deleteInBatch(cars);
    }
	
	public String getCarModel(Integer carID) {
        return carrepo.findModel(carID);
    }


	

}
