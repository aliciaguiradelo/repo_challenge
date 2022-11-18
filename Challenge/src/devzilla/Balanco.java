package devzilla;

import java.util.ArrayList;
import java.util.Date;

public class Balanco {
	private long id;
	private Date dtInicio;
	private Date dtFinal;
	private double patrimonioLiquido;
	
	private ArrayList<Ativo> ativos = new ArrayList<>();
	private ArrayList<Passivo> passivos = new ArrayList<>();
	
	public Balanco() {
		
	}

	public Balanco(long id, Date dtInicio, Date dtFinal, double patrimonioLiquido){
		this.id = id;
		this.dtInicio = dtInicio;
		this.dtFinal = dtFinal;
		this.patrimonioLiquido = patrimonioLiquido;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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
			totalPassivo = p.getValor();
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
