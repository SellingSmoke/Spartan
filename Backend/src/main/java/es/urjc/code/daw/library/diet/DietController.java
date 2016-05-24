package es.urjc.code.daw.library.diet;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import es.urjc.code.daw.library.goal.Goal;
import es.urjc.code.daw.library.goal.GoalRepository;
import es.urjc.code.daw.library.task.Task;
import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserComponent;
import es.urjc.code.daw.library.user.UserRepository;


@RestController
@RequestMapping("/diet")
public class DietController {
	
	@Autowired
	private DietRepository dietRepository;
	@Autowired
	private GoalRepository goalRepository;

	@RequestMapping(value = "/goal/{id}", method = RequestMethod.POST)
	public ResponseEntity<Diet> newGoal(@RequestBody Diet diet, @PathVariable(value="id") String id) {
		long id_i = -1;
		try{
			id_i = Long.parseLong(id);
		}catch(NumberFormatException e){
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Goal goal = goalRepository.findOne(id_i);
		if(goal != null){
			dietRepository.save(diet);
			goal.setDiet(diet);
			goalRepository.save(goal);
			return new ResponseEntity<>(diet, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value = "/edit", method = RequestMethod.PUT)
	public ResponseEntity<Diet> modifyGoal(@RequestBody Diet diet) {
		if(dietRepository.findOne(diet.getId()) != null){
			dietRepository.save(diet);
			return new ResponseEntity<>(diet, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
	}

}
