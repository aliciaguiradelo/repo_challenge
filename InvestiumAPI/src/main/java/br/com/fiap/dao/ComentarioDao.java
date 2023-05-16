package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Categoria;
import br.com.fiap.model.Comentario;
import br.com.fiap.model.Comentario;

public class ComentarioDao {

	SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
	PostagemDao postagemDao = new PostagemDao();
	UsuarioDao usuarioDao = new UsuarioDao();

	public void insert(Comentario c) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
		Statement statement;

		String dataComentario = sdf.format(c.getData());

		try {
			String query = String.format("insert into comentario values(%s,'%s', '%s', %s, '%s')", c.getId(),
					dataComentario, c.getConteudo(), c.getPostagem().getId(), c.getUsuario().getEmail());

			statement = conn.createStatement();
			statement.executeUpdate(query);
		} catch (Exception e) {
			System.out.println("Erro ao inserir o comentario! - " + e);
		} finally {
			conn.close();
		}

	}

	public ArrayList<Comentario> getAll() throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
		Statement statement;
		ResultSet rs = null;
		ArrayList<Comentario> list = null;

		try {
			String query = "select * from comentario order by id_coment";

			statement = conn.createStatement();

			rs = statement.executeQuery(query);

			list = new ArrayList<Comentario>();
			while (rs.next()) {
				Comentario c = new Comentario();
				c.setId(Integer.parseInt(rs.getString("id_coment")));
				c.setData(rs.getDate("data"));
				c.setConteudo(rs.getString("conteudo"));
				c.setPostagem(postagemDao.getPostagem(rs.getInt("fk_postagem")));
				c.setUsuario(usuarioDao.getUsuario(rs.getString("fk_email")));

				list.add(c);
			}
		} catch (Exception e) {
			System.out.println("Erro ao exibir postagem! - " + e);
		} finally {
			conn.close();
		}

		return list;
	}

	public Comentario getComentario(int id) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
		Statement statement;
		ResultSet rs = null;
		Comentario comentario = null;

		try {
			String query = String.format("select * from comentario where id_coment = %s", id);

			statement = conn.createStatement();

			rs = statement.executeQuery(query);

			while (rs.next()) {
				comentario = new Comentario();
				comentario.setId(Integer.parseInt(rs.getString("id_coment")));
				comentario.setData(rs.getDate("data"));
				comentario.setConteudo(rs.getString("conteudo"));
				comentario.setPostagem(postagemDao.getPostagem(rs.getInt("fk_postagem")));
				comentario.setUsuario(usuarioDao.getUsuario(rs.getString("fk_email")));

			}
		} catch (Exception e) {
			System.out.println("Erro ao exibir o usuário! - " + e);
		} finally {
			conn.close();
		}

		return comentario;
	}
}
