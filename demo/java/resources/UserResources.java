package resources;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.User;

@Path("/User")
public class UserResources {

	private static List<User> users = new ArrayList<User>();
	private static Integer id = 0;
	
	@GET
	@Path("/Get")
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getAllUsers() {
		return users;
	}
	
	@POST
	@Path("/Create")
	@Consumes(MediaType.APPLICATION_JSON)
	public String addUser(User user) {

		user.setId(id++);
		users.add(user);
		return "{'success' : true}";
	}
	
	@POST
	@Path("/Update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String updateUser(User user) {

		for (User currentUser : users) {
	        if (currentUser.getId() == user.getId()) {
	        	currentUser.setFirstName(user.getFirstName());
	        	currentUser.setLastName(user.getLastName());
	        	currentUser.setAge(user.getAge());
	        	currentUser.setEmail(user.getEmail());
	        }
	    }
		return "{'success' : true}";
	}
}
