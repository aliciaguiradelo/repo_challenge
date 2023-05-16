package br.com.fiap.model;

public class Setor {
	private int id;
	private String descricao;
	
	public Setor() {
		
	}
	
	public Setor(int id, String descricao) {
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

}
