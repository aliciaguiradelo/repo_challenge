package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.IndicadorFinanceiroDAO;
import br.com.fiap.model.IndicadorFinanceiro;

public class IndicadorFinanceiroBO {
	private IndicadorFinanceiroDAO ifDAO = new IndicadorFinanceiroDAO();
	
	public ArrayList<IndicadorFinanceiro> getByEmpresa(int id) throws SQLException{
		return ifDAO.getByEmpresa(id);
	}
	
	public IndicadorFinanceiro getIndicador(int id) throws SQLException {
		return ifDAO.getIndicador(id);
	}
	
	public void insert(IndicadorFinanceiro indicador) throws SQLException {
		ifDAO.insert(indicador);
	}
	
	public void update(IndicadorFinanceiro indicador) throws SQLException {
		ifDAO.update(indicador);
	}
	
	public void delete(int id) throws SQLException{
		ifDAO.delete(id);
	}
}
