package es.urjc.code.daw.library.comment;

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


@RestController
@RequestMapping("/comment")
public class CommentController {
	
	@Autowired
	private GoalRepository goalRepository;

	@RequestMapping(value = "/goal/{id}", method = RequestMethod.POST)
	public ResponseEntity<Comment> newComment(@RequestBody Comment comment, @PathVariable(value="id") String id) {
		long id_i = -1;
		try{
			id_i = Long.parseLong(id);
		}catch(NumberFormatException e){
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Goal goal = goalRepository.findOne(id_i);
		if(goal != null){
			goal.getComments().add(comment);
			goalRepository.save(goal);
			return new ResponseEntity<>(comment, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
