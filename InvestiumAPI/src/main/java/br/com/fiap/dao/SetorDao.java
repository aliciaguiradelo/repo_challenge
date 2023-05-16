package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Setor;

public class SetorDao {
	public void insert(Setor s) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("insert into setor_java (id_setor, descricao) VALUES (%s,'%s')", s.getId(), s.getDescricao());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao inserir o setor! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<Setor> getAll() throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<Setor> list = null;
       
        try {
            String query= "select * from setor_java order by id_setor";
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Setor>(); 
            
            while(rs.next()){
            	Setor s = new Setor();
            	s.setId(rs.getInt("id_setor"));
            	s.setDescricao(rs.getString("descricao"));
            	
                list.add(s);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o setor! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}

	public Setor getSetor(int id) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        Setor setor = null;
        
        try {
            String query= String.format("select * from setor_java where id_setor = %s", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            
            while(rs.next()){
            	setor = new Setor();
            	setor.setId(rs.getInt("id_setor"));
            	setor.setDescricao(rs.getString("descricao"));
          
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o setor! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return setor;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("DELETE FROM setor_java "
            		+ "WHERE id_setor = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir o setor! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(Setor s) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("update setor_java set descricao = '%s'"
            		+ "where id_setor = %s", s.getDescricao(), s.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar o setor! - " + e);
        }
        finally {
        	conn.close();
        }
	}

}
