package br.com.fiap.model;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import br.com.fiap.bo.PostagemBo;
import br.com.fiap.bo.UsuarioBo;

public class Comentario {

	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	UsuarioBo usuarioBo = new UsuarioBo();
	PostagemBo postagemBo = new PostagemBo();

	private int id;
	private String conteudo;
	private Date data;
	private Usuario usuario;
	private Postagem postagem;
	
	
	public Comentario() {
		
	}
	
	public Comentario(int id, String conteudo, Date data, Usuario usuario, Postagem postagem) throws SQLException {
		this.id = id;
		this.conteudo = conteudo;
		this.data = data;
		this.usuario = usuario;
		this.postagem = postagem;
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

	public Postagem getPostagem() {
		return postagem;
	}

	public void setPostagem(Postagem postagem) {
		this.postagem = postagem;
	}
	
}
