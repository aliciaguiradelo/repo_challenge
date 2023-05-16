package br.com.fiap.model;


import java.util.ArrayList;
import java.util.Date;

public class Governanca {
	private int id;
	private Date dtInicio;
	private Date dtFim;
	private Empresa empresa;
	private ArrayList <PessoaGovernanca> pessoasGovernanca = new ArrayList <PessoaGovernanca>();
	
	public Governanca() {
		
	}
	
	public Governanca(int id, Date dtInicio, Date dtFim, Empresa empresa, ArrayList <PessoaGovernanca> pessoasGovernanca) {
		this.id = id;
		this.dtInicio = dtInicio;
		this.dtFim = dtFim;
		this.empresa = empresa;
		this.pessoasGovernanca = pessoasGovernanca;
	}
	

	public ArrayList<PessoaGovernanca> getPessoasGovernanca() {
		return pessoasGovernanca;
	}

	public void addPessoasGovernanca(PessoaGovernanca pessoaGovernanca) {
		this.pessoasGovernanca.add(pessoaGovernanca);
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDtInicio() {
		return dtInicio;
	}

	public void setDtInicio(Date dtInicio) {
		this.dtInicio = dtInicio;
	}

	public Date getDtFim() {
		return dtFim;
	}

	public void setDtFim(Date dtFim) {
		this.dtFim = dtFim;
	}

}
