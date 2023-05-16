package br.com.fiap.model;

public class UsuarioPostagem {
	String emailUsuario;
	int idPostagem;
	
	public UsuarioPostagem() {
		
	}
	
	public UsuarioPostagem(String emailUsuario, int idPostagem) {
		this.emailUsuario = emailUsuario;
		this.idPostagem = idPostagem;
	}
	
	public String getEmailUsuario() {
		return emailUsuario;
	}
	public void setEmailUsuario(String emailUsuario) {
		this.emailUsuario = emailUsuario;
	}
	public int getIdPostagem() {
		return idPostagem;
	}
	public void setIdPostagem(int idPostagem) {
		this.idPostagem = idPostagem;
	}
	
	

}
