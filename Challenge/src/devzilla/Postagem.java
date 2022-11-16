package devzilla;

import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Postagem {
	private int id;
	private String titulo;
	private String conteudo;
	private String imgUrl;
	private Date date;
	private int likes;
	private Usuario usuario;
	private ArrayList<Comentario> comentarios = new ArrayList<>();
	
	public Postagem() {
		
	}

	public Postagem(int id, String titulo, String conteudo, String imgUrl, Date date) {
		this.id = id;
		this.titulo = titulo;
		this.conteudo = conteudo;
		this.imgUrl = imgUrl;
		this.date = date;
		this.likes = 0;
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

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public ArrayList<Comentario> getComentarios() {
		return comentarios;
	}

	public void addComentario(Comentario comentario) {
		comentarios.add(comentario);
	}
	
	public void excluirComentario(Comentario comentario) {
		id = comentario.getId();
		comentarios.remove(id);
	}
	
	public void listarComentario() {
		for(Comentario c: comentarios) {
			System.out.println("ID: " + c.getId() + "Comentário: " + c.getConteudo() + "Data: " + c.getData());
		}
	}
	
	public void editarComentario(Comentario comentario) {
		Scanner scn = new Scanner(System.in);
		
		System.out.println("Digite o novo comentário: ");
		comentario.setConteudo(scn.next());
		comentario.setData(new Date());
	}
	
	public String exibirPostagem() {
		return "ID: " + this.id + "Título: " + this.titulo + "Conteúdo: " + this.conteudo +
				"Imagem: " + this.imgUrl + "Data: " + this.date + "Likes: " + this.likes;
	}
	
	
	
	

}
