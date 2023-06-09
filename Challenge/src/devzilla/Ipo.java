package devzilla;

public class Ipo {

	private long id;
	private double valorInicial;
	private String descricao;
	
	public Ipo() {
		
	}

	public Ipo(long id, double valorInicial, String descricao) {
		this.id = id;
		this.valorInicial = valorInicial;
		this.descricao = descricao;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getValorInicial() {
		return valorInicial;
	}

	public void setValorInicial(double valorInicial) {
		this.valorInicial = valorInicial;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
}
