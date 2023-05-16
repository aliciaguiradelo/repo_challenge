package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.EmpresaDao;
import br.com.fiap.model.Empresa;


public class EmpresaBo {
	
	EmpresaDao empresaDao = new EmpresaDao();

	public ArrayList<Empresa> getAll() throws SQLException{
		return empresaDao.getAll();
	}
	
	public Empresa getEmpresa(int id) throws SQLException {
		return empresaDao.getEmpresa(id);
	}
	
	public void insert(Empresa empresa) throws SQLException {
		empresaDao.insert(empresa);
	}
	
	public void update(Empresa empresa) throws SQLException {
		empresaDao.update(empresa);
	}
	
	public void delete(int id) throws SQLException{
		empresaDao.delete(id);
	}
}
