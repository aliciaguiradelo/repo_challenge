package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.CategoriaDao;
import br.com.fiap.dao.PostagemDao;
import br.com.fiap.model.Categoria;
import br.com.fiap.model.Postagem;

public class CategoriaBo {
	
	private CategoriaDao categoriaDao = new CategoriaDao();
	private PostagemDao postagemDao = new PostagemDao();
	
	public ArrayList<Categoria> getAll() throws SQLException{
		return categoriaDao.getAll();
	}
	
	public Categoria getCategoria(int id) throws SQLException {
		return categoriaDao.getCategoria(id);
	}
	
	public void insert(Categoria categoria) throws SQLException {
		categoriaDao.insert(categoria);
	}
	
	public void update(Categoria categoria) throws SQLException {
		categoriaDao.update(categoria);
	}
	
	public void delete(int id) throws SQLException{
		categoriaDao.delete(id);
	}
	
	public ArrayList<Postagem> publicacoesCategoria(int idCategoria) throws SQLException {
		return postagemDao.getPostagemCategoria(idCategoria);
	}

}
