package br.com.fiap.bo;

import java.sql.SQLException;
import java.util.ArrayList;

import br.com.fiap.dao.UsuarioDao;
import br.com.fiap.model.Usuario;
import br.com.fiap.model.UsuarioIpo;
import br.com.fiap.model.UsuarioPostagem;

public class UsuarioBo {

	private UsuarioDao usuarioDao = new UsuarioDao();

	public ArrayList<Usuario> getAll() throws SQLException {
		return usuarioDao.getAll();
	}

	public Usuario getUsuario(String email, String senha) throws SQLException {
		return usuarioDao.getUsuario(email, senha);
	}
	
	public Usuario getUsuario(String email) throws SQLException {
		return usuarioDao.getUsuario(email);
	}

	public void insert(Usuario usuario) throws SQLException {
		usuarioDao.insert(usuario);
	}

	/*
	public void update(Usuario usuario) throws SQLException {
		usuarioDao.update(usuario);
	}*/

	public void delete(String email) throws SQLException {
		usuarioDao.delete(email);
	}
	
	public void salvarPostagem(UsuarioPostagem usuarioPostagem) throws SQLException{
		usuarioDao.salvarPostagem(usuarioPostagem);
	}
	
	public void salvarIpo(UsuarioIpo usuarioIpo) throws SQLException{
		usuarioDao.salvarIpo(usuarioIpo);
	}
}
