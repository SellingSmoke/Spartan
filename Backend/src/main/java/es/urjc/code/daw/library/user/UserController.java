package es.urjc.code.daw.library.user;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

	private static final Logger log = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserRepository userRepository;

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
