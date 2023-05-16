package br.com.fiap.model;

import java.util.ArrayList;
import java.util.Date;

public class Balanco {

	private int id;
	private Date dtInicio;
	private Date dtFinal;
	private double patrimonioLiquido;
	
	private ArrayList<Ativo> ativos = new ArrayList<>();
	private ArrayList<Passivo> passivos = new ArrayList<>();
	
	private Empresa empresa;
	
	public Balanco() {
		
	}

	public Balanco(int id, Date dtInicio, Date dtFinal, double patrimonioLiquido, Empresa empresa){
		this.id = id;
		this.dtInicio = dtInicio;
		this.dtFinal = dtFinal;
		this.patrimonioLiquido = patrimonioLiquido;
		this.empresa = empresa;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

	public void setPatrimonioLiquido(double patrimonioLiquido) {
		this.patrimonioLiquido = patrimonioLiquido;
	}

	public void setAtivos(ArrayList<Ativo> ativos) {
		this.ativos = ativos;
	}

	public void setPassivos(ArrayList<Passivo> passivos) {
		this.passivos = passivos;
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

	public Date getDtFinal() {
		return dtFinal;
	}

	public void setDtFinal(Date dtFinal) {
		this.dtFinal = dtFinal;
	}

	public double getPatrimonioLiquido() {
		return patrimonioLiquido;
	}

	public void setPatrimonioLiquido(ArrayList<Ativo> ativos, ArrayList<Passivo> passivos) {
		double totalAtivo = 0;
		double totalPassivo = 0;
		
		for(Ativo a: ativos) {
			totalAtivo += a.getValor();
		}
		
		for(Passivo p: passivos) {
			totalPassivo += p.getValor();
		}
		
		this.patrimonioLiquido = totalAtivo - totalPassivo;
	}

	public ArrayList<Ativo> getAtivos() {
		return ativos;
	}

	public ArrayList<Passivo> getPassivos() {
		return passivos;
	}
	
	public void addAtivo(Ativo ativo) {
		ativos.add(ativo);
	}
	
	public void addPassivo(Passivo passivo) {
		passivos.add(passivo);
	}
}
