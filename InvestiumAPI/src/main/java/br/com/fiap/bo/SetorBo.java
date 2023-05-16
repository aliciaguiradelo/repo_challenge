package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.SetorDao;
import br.com.fiap.model.Setor;

public class SetorBo {

	private SetorDao setorDao = new SetorDao();

	public ArrayList<Setor> getAll() throws SQLException {
		return setorDao.getAll();
	}

	public Setor getSetor(int id) throws SQLException {
		return setorDao.getSetor(id);
	}

	public void insert(Setor setor) throws SQLException {
		setorDao.insert(setor);
	}


	public void update(Setor setor) throws SQLException {
		setorDao.update(setor);
	}

	public void delete(int id) throws SQLException {
		setorDao.delete(id);
	}
}
