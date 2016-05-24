package es.urjc.code.daw.library.task;

import es.urjc.code.daw.library.goal.Goal;
import es.urjc.code.daw.library.goal.GoalRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	
	@Autowired
	private GoalRepository goalRepository;
	
	@Autowired
	private TaskRepository taskRepository;
	
	@RequestMapping(value = "/goal/{id}", method = RequestMethod.POST)
	public ResponseEntity<Task> newTask(@RequestBody Task task, @PathVariable(value="id") String id) {
		long id_i = -1;
		try{
			id_i = Long.parseLong(id);
		}catch(NumberFormatException e){
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Goal goal = goalRepository.findOne(id_i);
		if(goal != null){
			goal.getTasks().add(task);
			goalRepository.save(goal);
			List<Task> l = goalRepository.findOne(id_i).getTasks();
			Task task2 = l.get(l.size()-1);
			return new ResponseEntity<>(task2, HttpStatus.CREATED);
		}else{
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(value = "/edit", method = RequestMethod.PUT)
	public ResponseEntity<Task> editTask(@RequestBody Task task) {
		if(goalRepository.findOne(task.getId()) != null){
			taskRepository.save(task);
			return new ResponseEntity<>(task, HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
		}
	}
	
	@RequestMapping(value = "/{id1}/goal/{id2}", method = RequestMethod.DELETE)
	public ResponseEntity<Task> deleteTask(@PathVariable(value="id1") String id1, @PathVariable(value="id2") String id2) {
		System.out.println("Matchea delete");
		long id_i_1 = -1;
		long id_i_2 = -1;
		try{
			id_i_1 = Long.parseLong(id1);
			id_i_2 = Long.parseLong(id1);
		}catch(NumberFormatException e){
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Goal goal = goalRepository.findOne(id_i_2);
		Task task = taskRepository.findOne(id_i_1);
		goal.getTasks().remove(task);
		taskRepository.delete(task);
		goalRepository.save(goal);
		return new ResponseEntity<>(task, HttpStatus.OK);
	}
	
	
		
}
