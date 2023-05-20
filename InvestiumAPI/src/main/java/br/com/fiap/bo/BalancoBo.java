package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.BalancoDao;
import br.com.fiap.model.Balanco;

public class BalancoBo {
private BalancoDao bDao = new BalancoDao();
	
	public ArrayList<Balanco> getByEmpresa(int id) throws SQLException{
		return bDao.getByEmpresa(id);
	}
	
	public Balanco getIndicador(int id) throws SQLException {
		return bDao.getBalanco(id);
	}
	
	public void insert(Balanco balanco) throws SQLException {
		bDao.insert(balanco);
	}
	
	public void update(Balanco balanco) throws SQLException {
		bDao.update(balanco);
	}
	
	public void delete(int id) throws SQLException{
		bDao.delete(id);
	}
}
