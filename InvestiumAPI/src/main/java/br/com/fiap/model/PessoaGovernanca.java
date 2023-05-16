package br.com.fiap.model;

public class PessoaGovernanca {

	private int id;
	private String nome;
	private String cargo;
	
	public PessoaGovernanca() {
		
	}
	
	public PessoaGovernanca(int id, String nome, String cargo) {
		this.id = id;
		this.cargo = cargo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
}
