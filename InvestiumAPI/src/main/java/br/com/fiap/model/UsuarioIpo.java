package br.com.fiap.model;

public class UsuarioIpo {
	
	private int idEmpresa;
	private String emailUsuario;
	
	public UsuarioIpo() {
		
	}
	
	public UsuarioIpo(int idEmpresa, String emailUsuario) {
		super();
		this.idEmpresa = idEmpresa;
		this.emailUsuario = emailUsuario;
	}
	
	public int getIdEmpresa() {
		return idEmpresa;
	}
	public void setIdEmpresa(int idEmpresa) {
		this.idEmpresa = idEmpresa;
	}
	public String getEmailUsuario() {
		return emailUsuario;
	}
	public void setEmailUsuario(String emailUsuario) {
		this.emailUsuario = emailUsuario;
	}
	
	

}
