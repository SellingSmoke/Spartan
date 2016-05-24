package es.urjc.code.daw.library.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import java.nio.file.Path;
import java.nio.file.Paths;


import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	private static final Path FILES_FOLDER_TARGET = Paths.get(System.getProperty("user.dir"), "target\\classes\\static\\images");
	private static final Path FILES_FOLDER_SRC = Paths.get(System.getProperty("user.dir"), "src\\main\\resources\\static\\images");

//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public Collection<Book> getBooks() {
//		return repository.findAll();
//	}
//
//	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
//	public ResponseEntity<Book> getAnuncio(@PathVariable long id) {
//
//		log.info("Get book {}", id);
//
//		Book anuncio = repository.findOne(id);
//		if (anuncio != null) {
//			return new ResponseEntity<>(anuncio, HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}

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
//		if (file.isEmpty()) {
//			throw new RuntimeException("The file is empty");
//		}
//
//		String fileName = "image-" + file.getName() + file.getSize() + ((int) Math.floor(Math.random()*1000)) + ".jpg";
//		
//		File uploadedFileTarget = new File(FILES_FOLDER_TARGET.toFile(), fileName);
//		file.transferTo(uploadedFileTarget);
//		
//
//		File uploadedFileSrc = new File(FILES_FOLDER_SRC.toFile(), fileName);
//		file.transferTo(uploadedFileSrc);
//
//		return new ResponseEntity<>("/../images/" + fileName, HttpStatus.CREATED);
	
	

//	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
//	public ResponseEntity<Book> actulizaAnuncio(@PathVariable long id, @RequestBody Book updatedBook) {
//
//		Book anuncio = repository.findOne(id);
//		if (anuncio != null) {
//
//			updatedBook.setId(id);
//			repository.save(updatedBook);
//
//			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
//
//	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
//	public ResponseEntity<Book> borraAnuncio(@PathVariable long id) {
//
//		if (repository.exists(id)) {
//			repository.delete(id);
//			return new ResponseEntity<>(null, HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}

}
