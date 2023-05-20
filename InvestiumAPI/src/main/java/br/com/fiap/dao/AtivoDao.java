package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Ativo;

public class AtivoDao {
	public void insert(Ativo ativo) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("INSERT INTO ativo"
            		+ "(id_ativo, descricao, valor, fk_balanco) "
            		+ "VALUES (%s,'%s', %s, %s)", 
            		ativo.getId(), ativo.getDescricao(),
            		ativo.getValor(), ativo.getBalanco().getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao inserir o ativo! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<Ativo> getAll() throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<Ativo> list = null;
       
        try {
            String query= "SELECT * FROM ativo ORDER BY id_ativo";
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Ativo>(); 
            
            while(rs.next()){
            	Ativo ativo = new Ativo();
            	ativo.setId(rs.getInt("id_ativo"));
            	ativo.setDescricao(rs.getString("descricao"));
            	ativo.setValor(rs.getDouble("valor"));
            	
            	//TODO: ADICIONAR O GET BALANCO BY ID AQUI
            	ativo.setBalanco(null);
            	
                list.add(ativo);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o ativo! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}

	public Ativo getAtivo(int id) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        Ativo ativo = null;
        
        try {
            String query= String.format("SELECT * FROM ativo WHERE id_ativo = %s", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            
            while(rs.next()){
            	ativo = new Ativo();
            	ativo.setId(rs.getInt("id_ativo"));
            	ativo.setDescricao(rs.getString("descricao"));
            	ativo.setValor(rs.getDouble("valor"));
            	
            	//TODO: ADICIONAR O GET BALANCO BY ID AQUI
            	ativo.setBalanco(null);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o ativo! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return ativo;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("DELETE FROM setor "
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

	public void update(Ativo ativo) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("UPDATE ativo "
            		+ "SET descricao = '%s', valor = %s, fk_balanco = %s "
            		+ "WHERE id_ativo = %s", 
            		ativo.getDescricao(), ativo.getValor(),
            		ativo.getBalanco().getId(), ativo.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar o ativo! - " + e);
        }
        finally {
        	conn.close();
        }
	}
}
