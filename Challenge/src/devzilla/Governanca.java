package devzilla;

import java.util.ArrayList;
import java.util.Date;

public class Governanca {

	private long id;
	private ArrayList<String> presidente = new ArrayList<>();
	private ArrayList<String> diretoria = new ArrayList<>();
	private ArrayList<String> comite = new ArrayList<>();
	private ArrayList<String> conselhoFiscal = new ArrayList<>();
	private ArrayList<String> conselhoConsultivo = new ArrayList<>();
	private ArrayList<String> conselhoAdministrativo = new ArrayList<>();
	private ArrayList<String> assembleiaGeral = new ArrayList<>();
	private Date dtInicio;
	private Date dtFim;
	
	public Governanca() {
		
	}

	/*
	public Governanca(long id, ArrayList<String> presidente , ArrayList<String> diretoria, ArrayList<String> comites,
			ArrayList<String> conselhoFiscal, ArrayList<String> conselhoConsultivo,
			ArrayList<String> conselhoAdministrativo, ArrayList<String> assembleiaGeral, Date dtInicio, Date dtFim) {
		this.id = id;
		this.presidente = presidente;
		this.diretoria = diretoria;
		this.comites = comites;
		this.conselhoFiscal = conselhoFiscal;
		this.conselhoConsultivo = conselhoConsultivo;
		this.conselhoAdministrativo = conselhoAdministrativo;
		this.assembleiaGeral = assembleiaGeral;
		this.dtInicio = dtInicio;
		this.dtFim = dtFim;
	}
	*/

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public ArrayList<String> getPresidente() {
		return presidente;
	}

	public void setPresidente(ArrayList<String> presidente) {
		this.presidente = presidente;
	}

	public ArrayList<String> getDiretoria() {
		return diretoria;
	}

	public void setDiretoria(ArrayList<String> diretoria) {
		this.diretoria = diretoria;
	}

	public ArrayList<String> getComites() {
		return comite;
	}

	public void setComites(ArrayList<String> comites) {
		this.comite = comites;
	}

	public ArrayList<String> getConselhoFiscal() {
		return conselhoFiscal;
	}

	public void setConselhoFiscal(ArrayList<String> conselhoFiscal) {
		this.conselhoFiscal = conselhoFiscal;
	}

	public ArrayList<String> getConselhoConsultivo() {
		return conselhoConsultivo;
	}

	public void setConselhoConsultivo(ArrayList<String> conselhoConsultivo) {
		this.conselhoConsultivo = conselhoConsultivo;
	}

	public ArrayList<String> getConselhoAdministrativo() {
		return conselhoAdministrativo;
	}

	public void setConselhoAdministrativo(ArrayList<String> conselhoAdministrativo) {
		this.conselhoAdministrativo = conselhoAdministrativo;
	}

	public ArrayList<String> getAssembleiaGeral() {
		return assembleiaGeral;
	}

	public void setAssembleiaGeral(ArrayList<String> assembleiaGeral) {
		this.assembleiaGeral = assembleiaGeral;
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
	
	public void addPresidente(String presidente) {
		this.presidente.add(presidente);
	}
	
	public void addDiretoria(String diretoria) {
		this.diretoria.add(diretoria);
	}
	
	public void addComite(String comite) {
		this.comite.add(comite);
	}
	
	public void addConselhoFiscal(String conselhoFiscal) {
		this.conselhoFiscal.add(conselhoFiscal);
	}
	
	public void addConselhoConsultivo(String conselhoConsultivo) {
		this.conselhoConsultivo.add(conselhoConsultivo);
	}
	
	public void addConselhoAdministrativo(String conselhoAdministrativo) {
		this.conselhoAdministrativo.add(conselhoAdministrativo);
	}
	
	public void addAssembleiaGeral(String assembleiaGeral) {
		this.assembleiaGeral.add(assembleiaGeral);
	}
	
	
	

}
