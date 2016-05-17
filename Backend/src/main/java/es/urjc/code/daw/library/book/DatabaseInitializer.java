package es.urjc.code.daw.library.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.comment.Comment;
import es.urjc.code.daw.library.goal.Goal;
import es.urjc.code.daw.library.task.Task;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample users
		
		long l = Long.parseLong("650581933000");

		userRepository.save(new User(-1, "trainer", "good", "miCorreo1@gmail.com", l, "Hombre", "pass", "ROLE_TRAINER"));	
		userRepository.save(new User(-2,"admin", "bad", "miCorreo3@gmail.com", l, "Hombre","pass","ROLE_ADMIN"));
		
		User u = new User(1,"student", "normal", "miCorreo2@gmail.com", l, "Mujer", "pass","ROLE_STUDENT");
		Goal g = new Goal(50, 3, "parte superior", true, false);
		Comment c = new Comment("ROLE_STUDENT", "Oye, y esto ... como se hace", true);
		u.getGoals().add(g);
		
		Task t = new Task("Repeticiones",  0, "Esta tarea hay que hacerla asi", 1, 15, "repeticiones", 10, 40, "Kg", 35);
		g.getTasks().add(t);
		g.getComments().add(c);
		
		userRepository.save(u);
		
	}
}
