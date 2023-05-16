package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.GovernancaDao;
import br.com.fiap.model.Governanca;

public class GovernancaBo {
	
	GovernancaDao governancaDao = new GovernancaDao();
	
	public ArrayList<Governanca> getAll() throws SQLException{
		return governancaDao.getAll();
	}
	
	public Governanca getGovernanca(int id) throws SQLException {
		return governancaDao.getGovernanca(id);
	}
	
	public void insert(Governanca governanca) throws SQLException {
		governancaDao.insert(governanca);
	}
	
	public void update(Governanca governanca) throws SQLException {
		governancaDao.update(governanca);
	}
	
	public void delete(int id) throws SQLException{
		governancaDao.delete(id);
	}
	

}
