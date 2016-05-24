package es.urjc.code.daw.library.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<User> newUser(@RequestBody User user) {
		if(userRepository.findByName(user.getName()) == null){
			userRepository.save(user);
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>(HttpStatus.IM_USED);
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
