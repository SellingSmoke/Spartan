package es.urjc.code.daw.library.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.comment.Comment;
import es.urjc.code.daw.library.diet.Diet;
import es.urjc.code.daw.library.diet.DietRepository;
import es.urjc.code.daw.library.goal.Goal;
import es.urjc.code.daw.library.task.Task;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DietRepository dietRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample users
		
		//Cumpleaños por defecto
		long l = Long.parseLong("650581933000");

		userRepository.save(new User(-1, "trainer", "good", "miCorreo1@gmail.com", l, "Hombre", "pass", "ROLE_TRAINER"));	
		userRepository.save(new User(-2,"admin", "bad", "miCorreo3@gmail.com", l, "Hombre","pass","ROLE_ADMIN"));
		
		User u = new User(1,"student", "normal", "miCorreo2@gmail.com", l, "Mujer", "pass","ROLE_STUDENT");
		Goal g = new Goal(50, 3, "parte superior", true, true, false);
		Comment c1 = new Comment("ROLE_STUDENT", "Oye, y esto ... como se hace", true);
		Comment c2 = new Comment("ROLE_TRAINER", "Se hace asi asi y asi", false);
		Comment c3 = new Comment("ROLE_STUDENT", "Vale vale, vamo' a carmarnos", false);
		u.getGoals().add(g);
		Task t = new Task("Repeticiones",  0, "Esta tarea hay que hacerla asi", 1, 15, "repeticiones", 10, 40, "Kg", 35);
		
		String m = "[[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 1 clementina\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"],[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 1 manzana\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"],[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 1 pera\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"],[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 1 platano\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"],[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 1 kiwi\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"],[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 2 mandarina\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"],[\" - Leche descremada - 2 biscotes sin sal con aceite de oliva - 1 naranja\",\"- Menestra de verduras - Conejo al tomillo - 1 naranja\",\"- 1 yogur desnatado\",\"- Ensalada de scarola, granada y pepitas de girasol - Merluza al vapor\"]]";
		g.getTasks().add(t);
		g.getComments().add(c1);
		g.getComments().add(c2);
		g.getComments().add(c3);
		Diet d = new Diet(0, "Dieta para adelgazar", "Esta dieta controlad las calorias sin descuidar vitaminas y proteinas",
				"No apta para celiacos", m);
		dietRepository.save(d);
		g.setDiet(d);
		userRepository.save(u);
		
	}
}
