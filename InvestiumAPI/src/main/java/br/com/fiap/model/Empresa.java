package br.com.fiap.model;

public class Empresa {
	private int id;
	private String nome;
	private String descricao;
	private boolean ativoIpo;
	private double valorInicialIpo;
	private String descricaoIpo;
	private String linkEmpresa;
	private String linkProspecto;
	private String imagem;
	private Setor setor;
	
	//private ArrayList<Balanco> balancos = new ArrayList<>();
	
	public Empresa() {
		
	}

	public Empresa(int id, String nome, boolean ativoIpo, Setor setor) {
		this.id = id;
		this.nome = nome;
		this.ativoIpo = ativoIpo;
		this.setor = setor;
	}
	
	

	public Empresa(int id, String nome, String descricao, boolean ativoIpo, double valorInicialIpo, String descricaoIpo,
			String linkEmpresa, String linkProspecto, String imagem, Setor setor) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.ativoIpo = ativoIpo;
		this.valorInicialIpo = valorInicialIpo;
		this.descricaoIpo = descricaoIpo;
		this.linkEmpresa = linkEmpresa;
		this.linkProspecto = linkProspecto;
		this.imagem = imagem;
		this.setor = setor;
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

	/*
	public ArrayList<Balanco> getBalancos() {
		return balancos;
	}
	
	public void setBalancos(ArrayList<Balanco> balancos) {
		this.balancos = balancos;
	}
	
		
	public void addBalanco(Balanco balanco) {
		balancos.add(balanco);
	}
	*/	
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public boolean getAtivoIpo() {
		return ativoIpo;
	}

	public void setAtivoIpo(boolean ativoIpo) {
		this.ativoIpo = ativoIpo;
	}

	public double getValorInicialIpo() {
		return valorInicialIpo;
	}

	public void setValorInicialIpo(double valorInicialIpo) {
		this.valorInicialIpo = valorInicialIpo;
	}

	public String getDescricaoIpo() {
		return descricaoIpo;
	}

	public void setDescricaoIpo(String descricaoIpo) {
		this.descricaoIpo = descricaoIpo;
	}

	public String getLinkEmpresa() {
		return linkEmpresa;
	}

	public void setLinkEmpresa(String linkEmpresa) {
		this.linkEmpresa = linkEmpresa;
	}

	public String getLinkProspecto() {
		return linkProspecto;
	}

	public void setLinkProspecto(String linkProspecto) {
		this.linkProspecto = linkProspecto;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	
	public Setor getSetor() {
		return setor;
	}

	public void setSetor(Setor setor) {
		this.setor = setor;
	}

}
