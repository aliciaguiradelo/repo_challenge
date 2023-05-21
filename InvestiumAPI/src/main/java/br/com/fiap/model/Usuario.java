package br.com.fiap.model;

import java.util.ArrayList;
import java.util.Date;

public class Usuario {

	private String nome;
	private String email;
	private String senha;
	private Date dtNascimento;
	private String papel;
	
	private ArrayList<Postagem> postagens = new ArrayList<Postagem>();
	private ArrayList<Empresa>  empresas = new ArrayList<Empresa>();
	
	public Usuario() {
		
	}

	public Usuario(String nome, String email, String senha, Date dtNascimento, String papel) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.dtNascimento = dtNascimento;
		this.papel = papel;
	}

	public ArrayList<Postagem> getPostagens() {
		return postagens;
	}

	public void setPostagens(ArrayList<Postagem> postagens) {
		this.postagens = postagens;
	}

	public ArrayList<Empresa> getEmpresas() {
		return empresas;
	}

	public void setEmpresas(ArrayList<Empresa> empresas) {
		this.empresas = empresas;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Date getDtNascimento() {
		return dtNascimento;
	}

	public void setDtNascimento(Date dtNascimento) {
		this.dtNascimento = dtNascimento;
	}

	public String getPapel() {
		return papel;
	}

	public void setPapel(String papel) {
		this.papel = papel;
	}
	
	/*

	public ArrayList<Postagem> getPostagens() {
		return postagens;
	}

	public ArrayList<Ipo> getIpos() {
		return ipos;
	}

	public void addIpo(Ipo ipo) {
		this.ipos.add(ipo);
	}

	public void addPostagem(Postagem postagem) {
		postagens.add(postagem);
	}
	
	*/
}
