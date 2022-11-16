package devzilla;

import java.util.ArrayList;

public class Categoria {

	private int id;
	private String descricao;
	
	private ArrayList<Postagem> postagens = new ArrayList<>();
	
	public Categoria() {
		
	}

	public Categoria(int id, String descricao) {
		this.id = id;
		this.descricao = descricao;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public ArrayList<Postagem> getPostagens() {
		return postagens;
	}

	public void addPostagem(Postagem postagem) {
		postagens.add(postagem);
	}
	
	public void excluirPostagem(Postagem postagem) {
		id = postagem.getId();
		postagens.remove(id);
	}
	
	
	
	
}
