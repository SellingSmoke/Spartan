package es.urjc.code.daw.library.diet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Diet{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long trainerId;
	private String name;
	private String description;
	private String notes;
	private String matrix;

	public Diet() {}

	public Diet(long trainerId, String name, String description, String notes, String matrix) {
		this.trainerId = trainerId;
		this.name = name;
		this.description = description;
		this.notes = notes;
		this.matrix = matrix;
	}

	public long getTrainerId() {
		return trainerId;
	}

	public void setTrainerId(long trainerId) {
		this.trainerId = trainerId;
	}

	public String getMatrix() {
		return matrix;
	}

	public void setMatrix(String matrix) {
		this.matrix = matrix;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


}
