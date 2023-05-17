package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.PostagemDao;
import br.com.fiap.model.Postagem;

public class PostagemBo {

	private PostagemDao postagemDao = new PostagemDao();

	public ArrayList<Postagem> getAll() throws SQLException {
		return postagemDao.getAll();
	}

	public Postagem getPostagem(int id) throws SQLException {
		return postagemDao.getPostagem(id);
	}
	
	public ArrayList<Postagem> getPostagensByCategoria(int id) throws SQLException {
		return postagemDao.getPostagemCategoria(id);
	}

	public void insert(Postagem postagem) throws SQLException {
		postagemDao.insert(postagem);
	}

	/*
	public void update(Postagem postagem) throws SQLException {
		postagemDao.update(postagem);
	}

	public void delete(int id) throws SQLException {
		postagemDao.delete(id);
	}
	*/
}
