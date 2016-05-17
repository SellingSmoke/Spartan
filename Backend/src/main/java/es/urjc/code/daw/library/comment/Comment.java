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
	private String comment;
	private boolean read;
	
	public Comment(String rol, String comment, boolean read) {
		super();
		this.rol = rol;
		this.date = System.currentTimeMillis();
		this.comment = comment;
		this.read = read;
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

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public boolean isRead() {
		return read;
	}

	public void setRead(boolean read) {
		this.read = read;
	}

	public long getDate() {
		return date;
	}
	
	public void setDate(long date) {
		this.date = date;
	}

}
