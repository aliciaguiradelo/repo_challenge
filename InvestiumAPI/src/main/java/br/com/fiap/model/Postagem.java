package br.com.fiap.model;

import java.util.ArrayList;
import java.util.Date;

//import model.Comentario;

public class Postagem {

	private int id;
	private String titulo;
	private String conteudo;
	private String imgUrl;
	private Date date;
	private int likes;
	private Categoria categoria;
	//private Usuario usuario;
	//private ArrayList<Comentario> comentarios = new ArrayList<>();
	
	public Postagem() {
		
	}

	public Postagem(int id, String titulo, String conteudo, String imgUrl, Date date, Categoria categoria, Usuario usuario) {
		this.id = id;
		this.titulo = titulo;
		this.conteudo = conteudo;
		this.imgUrl = imgUrl;
		this.date = date;
		this.likes = 0;
		this.categoria = categoria;
		//this.usuario = usuario;
	}
	
	public Postagem(int id, String titulo, String conteudo, String imgUrl, Date date, Categoria categoria) {
		this.id = id;
		this.titulo = titulo;
		this.conteudo = conteudo;
		this.imgUrl = imgUrl;
		this.date = date;
		this.likes = 0;
		this.categoria = categoria;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}
	
	/*

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	*/
	
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	/*
	public ArrayList<Comentario> getComentarios() {
		return comentarios;
	}

	public void addComentario(Comentario comentario) {
		comentarios.add(comentario);
	}
	*/
}
