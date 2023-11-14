package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	private UserRepository userrepo;
	
	public void addUser(UserModel data)
	{
		userrepo.save(data);
	}
	
	public UserModel findUser(LoginModel data)
	{
		String email=data.getEmail();
		String pass=data.getPassword();
		return userrepo.findByEmailAndPassword(email,pass);
	}
	public UserModel userProfileEdit(UserModel data) {
		UserModel user=userrepo.findById(data.getuserID()).orElse(null);
		user.setAge(data.getAge());
		user.setEmail(data.getEmail());
		user.setMobileNumber(data.getMobileNumber());
		user.setPassword(data.getPassword());
		user.setUsername(data.getUsername());
		return userrepo.save(user);
	}
	
	public void deleteUser(String email) {
		UserModel user=userrepo.findByEmail(email);
		userrepo.delete(user);
	}


    public int getId(String email) {
        UserModel user=userrepo.findByEmail(email);
		return user.getuserID();
    }

    public UserModel getuserProfile(int userID) {
        return userrepo.findById(userID).orElse(null);
    }

}
