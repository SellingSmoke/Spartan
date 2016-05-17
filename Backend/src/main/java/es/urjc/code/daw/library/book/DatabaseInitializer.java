package es.urjc.code.daw.library.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample users

		userRepository.save(new User(-1, "trainer", "good", "miCorreo1@gmail.com",650581933, "Hombre", "pass", "ROLE_TRAINER"));
		userRepository.save(new User(1,"student", "normal", "miCorreo2@gmail.com",650581933, "Mujer", "pass","ROLE_STUDENT"));
		userRepository.save(new User(-2,"admin", "bad", "miCorreo3@gmail.com",650581933, "Hombre","pass","ROLE_ADMIN"));
	}

}
