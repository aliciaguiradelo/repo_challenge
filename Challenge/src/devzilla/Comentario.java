package devzilla;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Comentario {
	
	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

	private int id;
	private String conteudo;
	private Date data;
	private Usuario usuario;
	
	public Comentario() {
		
	}

	public Comentario(int id, String conteudo, Date data) {
		this.id = id;
		this.conteudo = conteudo;
		this.data = data;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String exibirComentario() {
		return "ID: " +  this.id + "\nComentário: " + this.conteudo + "\nData: " + sdf.format(this.data);
	}
}
