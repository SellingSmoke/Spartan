package es.urjc.code.daw.library.task;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String name;           // Nombre de la Tarea
	private int status;            // 0: to do | 1: completed | 2: pending
	private String description;    // Descripcion de la Tarea
	private int type;              // Tipo de Tarea (0 para aerobicas, 1 para anaeróbicas)

	private int objective1;        // Objetivo 1              (Repeticiones/Distancia)
	private String format1;        // Formato del objetivo 1  (NºRepeticiones/Km)
	private int result1;           // Resultado del alumno 1  (Repeticiones/Distancia)

	private int objective2;        // Objetivo 2              (Peso/Tiempo)
	private String format2;        // Formato del objetivo 2  (Kg, Horas, Minutos)
	private int result2;           // Resultado del alumno 2  (Peso/Tiempo)
	
	

	
	public Task(String name, int status, String description, int type, int objective1, String format1, int result1,
			int objective2, String format2, int result2) {
		this.name = name;
		this.status = status;
		this.description = description;
		this.type = type;
		this.objective1 = objective1;
		this.format1 = format1;
		this.result1 = result1;
		this.objective2 = objective2;
		this.format2 = format2;
		this.result2 = result2;
	}
	
	public Task() {}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getObjective1() {
		return objective1;
	}

	public void setObjective1(int objective1) {
		this.objective1 = objective1;
	}

	public String getFormat1() {
		return format1;
	}

	public void setFormat1(String format1) {
		this.format1 = format1;
	}

	public int getResult1() {
		return result1;
	}

	public void setResult1(int result1) {
		this.result1 = result1;
	}

	public int getObjective2() {
		return objective2;
	}

	public void setObjective2(int objective2) {
		this.objective2 = objective2;
	}

	public String getFormat2() {
		return format2;
	}

	public void setFormat2(String format2) {
		this.format2 = format2;
	}

	public int getResult2() {
		return result2;
	}

	public void setResult2(int result2) {
		this.result2 = result2;
	}
	
	

}
