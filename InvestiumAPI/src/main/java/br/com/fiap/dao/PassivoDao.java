package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Passivo;

public class PassivoDao {
	public void insert(Passivo passivo) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("INSERT INTO passivo "
            		+ "(id_passivo, descricao, valor, fk_balanco) "
            		+ "VALUES (%s,'%s', %s, %s)", 
            		passivo.getId(), passivo.getDescricao(),
            		passivo.getValor(), passivo.getBalanco().getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao inserir o passivo! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<Passivo> getAll() throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<Passivo> list = null;
       
        try {
            String query= "SELECT * FROM passivo ORDER BY id_passivo";
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Passivo>(); 
            
            while(rs.next()){
            	Passivo passivo = new Passivo();
            	passivo.setId(rs.getInt("id_passivo"));
            	passivo.setDescricao(rs.getString("descricao"));
            	passivo.setValor(rs.getDouble("valor"));
            	
            	//TODO: ADICIONAR O GET BALANCO BY ID AQUI
            	passivo.setBalanco(null);
            	
                list.add(passivo);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o passivo! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}

	public Passivo getPassivo(int id) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        Passivo passivo = null;
        
        try {
            String query= String.format("SELECT * FROM passivo WHERE id_passivo = %s", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            
            while(rs.next()){
            	passivo = new Passivo();
            	passivo.setId(rs.getInt("id_passivo"));
            	passivo.setDescricao(rs.getString("descricao"));
            	passivo.setValor(rs.getDouble("valor"));
            	
            	//TODO: ADICIONAR O GET BALANCO BY ID AQUI
            	passivo.setBalanco(null);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o passivo! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return passivo;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("DELETE FROM passivo "
            		+ "WHERE id_passivo = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir o passivo! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(Passivo passivo) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("UPDATE passivo "
            		+ "SET descricao = '%s', valor = %s, fk_balanco = %s "
            		+ "WHERE id_passivo = %s", 
            		passivo.getDescricao(), passivo.getValor(),
            		passivo.getBalanco().getId(), passivo.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar o passivo! - " + e);
        }
        finally {
        	conn.close();
        }
	}
}