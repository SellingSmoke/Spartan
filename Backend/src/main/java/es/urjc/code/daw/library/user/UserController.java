package es.urjc.code.daw.library.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Collection;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserComponent userComponent;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<User> newUser(@RequestBody User user) {
		if(userRepository.findByName(user.getName()) == null){
			userRepository.save(user);
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>(HttpStatus.IM_USED);
		}
	}
	
	@RequestMapping(value = "/students/{id}", method = RequestMethod.GET)
	public ResponseEntity<Collection<User>> getStudents(@PathVariable(value="id") String id) {
		long id_i = -1;
		try{
			id_i = Long.parseLong(id);
		}catch(NumberFormatException e){
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		System.err.println("ID_"+id_i);
		Collection<User> students = userRepository.findByTrainerId(id_i);
		return new ResponseEntity<>(students,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/editUser", method = RequestMethod.PUT)
	public ResponseEntity<User> changePass(@RequestBody User user) {
		if( user != null){
			User userC = this.userComponent.getLoggedUser();
			if(user.getEmail() != this.userComponent.getLoggedUser().getEmail()){
				userC.setEmail(user.getEmail());
			}
			if(user.getPasswordHash() != null){
				userC.setPasswordHash(user.getPasswordHash());
			}
			userRepository.save(userC);
			return new ResponseEntity<>(userC,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@RequestMapping(value = "/imageUpload", method = RequestMethod.POST)
	public ResponseEntity<String> handleFileUpload(@RequestParam MultipartFile file, @RequestParam long id) throws IOException {
		
		if (!file.isEmpty()) {
		      try {
		        BufferedOutputStream stream = new BufferedOutputStream(
		            new FileOutputStream(new File("target/classes/static/assets/imagenes/" + file.getOriginalFilename())));
		                FileCopyUtils.copy(file.getInputStream(), stream);
		        stream.close();
		        
		                
		                BufferedOutputStream stream2 = new BufferedOutputStream(
		            new FileOutputStream(new File("src/main/resources/static/assets/imagenes/" + file.getOriginalFilename())));
		            FileCopyUtils.copy(file.getInputStream(), stream2);
		        stream2.close();
		        
		        User u = userRepository.findOne(id);
		        u.setImageUrl("/../assets/imagenes/" + file.getOriginalFilename());
		        userRepository.save(u);
		        
		        return new ResponseEntity<>("/../assets/imagenes/" + file.getOriginalFilename(), HttpStatus.CREATED);
		      }
		      catch (Exception e) {
		        System.out.println("ERROR: " + e.getMessage());
		      }
		    }
		    else { 
		      System.out.println("No se añadió una imagen, se asignará una por defecto");
		    }
		return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		
	}


}
