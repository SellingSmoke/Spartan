package es.urjc.code.daw.library.comment;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String rol;
	private long date;
	private String comentary;
	private boolean readed;
	
	public Comment(String rol, String comment, boolean readed) {
		this.rol = rol;
		this.date = System.currentTimeMillis();
		this.comentary = comment;
		this.readed = readed;
	}

	public Comment() {}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public String getComentary() {
		return comentary;
	}

	public void setComentary(String comment) {
		this.comentary = comment;
	}

	public boolean isReaded() {
		return readed;
	}

	public void setReaded(boolean readed) {
		this.readed = readed;
	}

	public long getDate() {
		return date;
	}
	
	public void setDate(long date) {
		this.date = date;
	}

}
