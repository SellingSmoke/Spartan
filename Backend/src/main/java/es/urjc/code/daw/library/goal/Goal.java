package es.urjc.code.daw.library.goal;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import es.urjc.code.daw.library.task.Task;

@Entity
public class Goal{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	double progress;       // Progreso de la Meta (Calculada en el servidor por tareas completadas)
	int type;
	  // Tipo de meta:
	  // ["perder peso","ganar musculo", "ganar resistencia" , "trabajar especificamente", "mejorar en", "otra"];
	
	String campoMetaX;    // Parametro X del tipo (Kg,Km)
	
	  // Modalidades:
	  // -> 0 (Vacio)
	  // -> 1 Pecho
	  // -> 2 Pierna
	  // -> 3 ... (Por completar)
	
	boolean acepted;
	boolean canceled;
	
	@OneToMany(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Task> tasks;

	public Goal() {}

	public Goal(double progress, int type, String campoMetaX, boolean acepted, boolean canceled) {
		super();
		this.progress = progress;
		this.type = type;
		this.campoMetaX = campoMetaX;
		this.acepted = acepted;
		this.canceled = canceled;
		this.tasks = new ArrayList<>();
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}

	public double getProgress() {
		return progress;
	}

	public void setProgress(double progress) {
		this.progress = progress;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getCampoMetaX() {
		return campoMetaX;
	}

	public void setCampoMetaX(String campoMetaX) {
		this.campoMetaX = campoMetaX;
	}

	public boolean isAcepted() {
		return acepted;
	}

	public void setAcepted(boolean acepted) {
		this.acepted = acepted;
	}

	public boolean isCanceled() {
		return canceled;
	}

	public void setCanceled(boolean canceled) {
		this.canceled = canceled;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


}
