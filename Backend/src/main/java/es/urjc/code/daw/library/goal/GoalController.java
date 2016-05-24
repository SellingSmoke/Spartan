package es.urjc.code.daw.library.goal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import es.urjc.code.daw.library.user.User;
@RestController
@RequestMapping("/goals")
public class GoalController {
	
	@Autowired
	private GoalRepository goalRepository;
	//private UserRepository userRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public ResponseEntity<Goal> newGoal(@RequestBody Goal goal) {
		if(goalRepository.findOne(goal.getId()) == null){
			goalRepository.save(goal);
			return new ResponseEntity<>(goal, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}
}
