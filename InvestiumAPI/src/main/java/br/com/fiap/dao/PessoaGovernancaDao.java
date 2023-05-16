package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Governanca;
import br.com.fiap.model.PessoaGovernanca;

public class PessoaGovernancaDao {

	public void insert(PessoaGovernanca ps) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("INSERT INTO pessoa_governanca"
            		+ "(id_pessoa_governanca, nome, cargo) "
            		+ "VALUES (%s, '%s', '%s')", 
            		ps.getId(), ps.getNome(), ps.getCargo());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
            
            /*
            
            for(Governanca g : ps.getGovernanca()) {
            	String query2 = String.format("INSERT INTO possui"
                		+ "(fk_pessoa_governanca, fk_id_governanca) "
                		+ "VALUES (%s, %s)", 
                		ps.getId(), g.getId());
               
                statement = conn.createStatement();          
                statement.executeUpdate(query2);
            }
            */
            
        }catch (Exception e){
            System.out.println("Erro ao inserir na tabela pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<PessoaGovernanca> getAllGovernanca(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ResultSet rsPG = null;
        ArrayList<PessoaGovernanca> list = null;
       
        try {
            String query = String.format("SELECT * FROM possui where fk_id_governanca = %s", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            
            list = new ArrayList<PessoaGovernanca>();
            while(rs.next()){
            	String query2 = String.format("SELECT * FROM pessoa_governanca where id_pessoa_governanca = %s", rs.getInt("fk_pessoa_governanca"));
            	
            	statement = conn.createStatement();
                rsPG = statement.executeQuery(query2);
                
            	PessoaGovernanca pg = new PessoaGovernanca();
            	pg.setId(rs.getInt("id_pessoa_governanca"));
            	pg.setNome(rs.getString("nome"));
            	pg.setCargo(rs.getString("cargo"));
            	
            	list.add(pg);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir da tabela pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}

	public PessoaGovernanca getPessoaGovernanca(int id_pessoa_governanca) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        PessoaGovernanca ps = null;
        
        try {
        	
        	String query = String.format("SELECT * FROM pessoa_governanca WHERE id_pessoa_governanca = %s", id_pessoa_governanca);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            
            while(rs.next()){
            	ps = new PessoaGovernanca();
            	ps.setId(rs.getInt("id_pessoa_governanca"));
            	ps.setNome(rs.getString("nome"));
            	ps.setCargo(rs.getString("cargo"));
          
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir a pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return ps;
	}
	
	public PessoaGovernanca getPessoaGovernanca(int idPessoaGovernanca, int idGovernanca) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ResultSet rsPG = null;
        PessoaGovernanca pg = null;
        
        try {
            String query = String.format("SELECT * FROM possui where fk_id_governanca = %s", idGovernanca);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            
            pg = new PessoaGovernanca();
            while(rs.next()){
            	String query2 = String.format("SELECT * FROM pessoa_governanca where id_pessoa_governanca = %s", idPessoaGovernanca);
            	
            	statement = conn.createStatement();
                rsPG = statement.executeQuery(query2);
            	
            	pg.setId(rs.getInt("id_pessoa_governanca"));
            	pg.setNome(rs.getString("nome"));
            	pg.setCargo(rs.getString("cargo"));
            	
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir da tabela pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return pg;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
        	//EXCLUINDO PRIMEIRO DA TABELA POSSUI PRA NÃO DAR ERRO
        	String queryPossui = String.format("DELETE FROM possui "
            		+ "WHERE fk_pessoa_governanca = %s", id);
           
            Statement possuiStatement = conn.createStatement();          
            possuiStatement.executeUpdate(queryPossui);
        	
            //EXCLUINDO DA TABELA PESSOA_GOVERNANCA DE FATO
            String query = String.format("DELETE FROM pessoa_governanca "
            		+ "WHERE id_pessoa_governanca = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir da tabela pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(PessoaGovernanca ps) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("UPDATE pessoa_governanca "
            		+ "SET nome = '%s', cargo = '%s'"
            		+ "WHERE id_pessoa_governanca = %s", 
            		ps.getNome(), ps.getCargo() , ps.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar a pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
	}
}
