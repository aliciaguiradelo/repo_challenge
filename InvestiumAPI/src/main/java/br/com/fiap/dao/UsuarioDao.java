package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Usuario;
import br.com.fiap.model.UsuarioIpo;
import br.com.fiap.model.UsuarioPostagem;

public class UsuarioDao {

	SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");

	public void insert(Usuario u) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        
        String dataNascimento = sdf.format(u.getDtNascimento());
       
        try {
            String query = String.format("insert into usuario_java values('%s','%s','%s','%s','%s')", u.getEmail(), u.getNome(), dataNascimento, u.getSenha(), u.getPapel());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao inserir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<Usuario> getAll() throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<Usuario> list = null;
       
        try {
            String query= "select * from usuario_java order by email";
            
            statement=conn.createStatement();
           
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Usuario>(); 
            while(rs.next()){
            	Usuario u = new Usuario();
            	u.setEmail(rs.getString("email"));
            	u.setNome(rs.getString("nome"));
            	u.setDtNascimento((rs.getDate("d_nasc")));
            	u.setSenha(rs.getString("senha"));
            	u.setPapel(rs.getString("papel"));
            	
            	
                list.add(u);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}
	
	public Usuario getUsuario(String email, String senha) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        Usuario usuario = null;
        
        try {
            String query= String.format("select * from usuario_java where email = '%s' and senha = '%s'", email, senha);
            
            statement=conn.createStatement();
           
            rs = statement.executeQuery(query);
           
            usuario = new Usuario();
            while(rs.next()){
            	usuario.setEmail(rs.getString("email"));
            	usuario.setNome(rs.getString("nome"));
            	usuario.setDtNascimento(rs.getDate("d_nasc"));
            	usuario.setSenha(rs.getString("senha"));
            	usuario.setPapel(rs.getString("papel"));
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return usuario;
	}
	
	public Usuario getUsuario(String email) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        Usuario usuario = null;
        
        try {
            String query= String.format("select * from usuario_java where email = '%s'", email);
            
            statement=conn.createStatement();
           
            rs = statement.executeQuery(query);
           
            usuario = new Usuario();
            while(rs.next()){
            	usuario.setEmail(rs.getString("email"));
            	usuario.setNome(rs.getString("nome"));
            	usuario.setDtNascimento(sdf.parse(rs.getString("d_nasc")));
            	usuario.setSenha(rs.getString("senha"));
            	usuario.setPapel(rs.getString("papel"));
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return usuario;
	}

	public void delete(String email) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("delete from usuario_java where email = '%s'", email);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void salvarPostagem(UsuarioPostagem usuarioPostagem) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        
       
        try {
            String query = String.format("insert into usuario_postagem values('%s',%s)", usuarioPostagem.getEmailUsuario(), usuarioPostagem.getIdPostagem());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao salvar postagem! - " + e);
        }
        finally {
        	conn.close();
        }
		
	}

	public void salvarIpo(UsuarioIpo usuarioIpo) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        
       
        try {
            String query = String.format("insert into explora values(%s, '%s')", usuarioIpo.getIdEmpresa(), usuarioIpo.getEmailUsuario());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao salvar empresa/ipo! - " + e);
        }
        finally {
        	conn.close();
        }
		
	}

	
}
