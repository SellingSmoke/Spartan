package es.urjc.code.daw.library.goal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
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
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Goal> deleteGoal(@RequestBody Goal goal) {
		if(goalRepository.findOne(goal.getId()) != null){
			goalRepository.delete(goal);
			return new ResponseEntity<>(goal, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
	}
	
	@RequestMapping(value = "/modifyGoal", method = RequestMethod.PUT)
	public ResponseEntity<Goal> modifyGoal(@RequestBody Goal goal) {
		if(goalRepository.findOne(goal.getId()) == null){
			goalRepository.save(goal);
			return new ResponseEntity<>(goal, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
	}
		
}
