package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Governanca;
import br.com.fiap.model.PessoaGovernanca;

public class GovernancaDao {
	PessoaGovernancaDao pgdao = new PessoaGovernancaDao();
	EmpresaDao empresaDao = new EmpresaDao();
	
	SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
	
	public void insert(Governanca gov) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        
        try {
        	
        	System.out.println(gov.getEmpresa().getId());
        	
            String query = String.format("INSERT INTO governanca"
            		+ "(id_gov, dt_inicio, dt_fim, fk_empresa) "
            		+ "VALUES (%s, '%s', '%s', %s)", 
            		gov.getId(), sdf.format(gov.getDtInicio()), sdf.format(gov.getDtFim()), gov.getEmpresa().getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
            
            for(PessoaGovernanca ps : gov.getPessoasGovernanca()) {
            	pgdao.insert(ps);
            	String queryRelacionamento = String.format("insert into possui (fk_pessoa_governanca, fk_id_governanca) values (%s, %s)", ps.getId(), gov.getId());
            	statement.executeUpdate(queryRelacionamento);
            }
            
        }catch (Exception e){
            System.out.println("Erro ao inserir na tabela governança! - " + e);
        }
        finally {
        	conn.close();
        }
	}
	
	public ArrayList<Governanca> getAll() throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        Statement psStatement;
        ResultSet rs = null;
        ResultSet psRs = null;
        ArrayList<Governanca> list = null;
       
        try {
            String query = "SELECT * FROM governanca ORDER BY id_gov";
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Governanca>(); 
            
            while(rs.next()){
            	Governanca gov = new Governanca();
            	gov.setId(rs.getInt("id_gov"));
            	gov.setDtInicio(rs.getDate("dt_inicio"));
	            gov.setDtFim(rs.getDate("dt_fim"));
	            gov.setEmpresa(empresaDao.getEmpresa(rs.getInt("fk_empresa")));
            	
            	//PEGANDO CADA PESSOA RELACIONADA A PESSOA GOVERNANÇA PELA TABELA POSSUI
                String psQuery = "SELECT * FROM possui WHERE fk_id_governanca = " 
            	+ gov.getId();
                
                psStatement = conn.createStatement();
                psRs = psStatement.executeQuery(psQuery);
                
                while(psRs.next()) {
                    int psId = psRs.getInt("fk_pessoa_governanca");
                    // método para buscar a pessoa governanca na tabela governanca
                    PessoaGovernanca ps = pgdao.getPessoaGovernanca(psId); 
                    gov.addPessoasGovernanca(ps);
                }
                
                list.add(gov);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir da tabela pessoa governança! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}
	
	public Governanca getGovernanca(int id) throws SQLException {
	    Connection conn = ConnectionFactory.getConnection();
	    Statement statement;
	    ResultSet rs = null;
	    Governanca governanca = null;
	   
	    try {
	        String query = "SELECT * FROM governanca WHERE id_gov = " + id;
	        
	        statement = conn.createStatement();
	        rs = statement.executeQuery(query);
	       
	        if (rs.next()){
	            governanca = new Governanca();
	            governanca.setId(rs.getInt("id_gov"));
	            governanca.setDtInicio(rs.getDate("dt_inicio"));
	            governanca.setDtFim(rs.getDate("dt_fim"));
	            governanca.setEmpresa(empresaDao.getEmpresa(rs.getInt("fk_empresa")));
	            
	          //PEGANDO CADA PESSOA GOVERNANÇA RELACIONADA A GOVERNANÇA PELA TABELA POSSUI
                String psQuery = "SELECT * FROM possui WHERE fk_id_governanca = " 
            	+ governanca.getId();
                
                Statement psStatement = conn.createStatement();
                ResultSet psRs = psStatement.executeQuery(psQuery);
                
                while(psRs.next()) {
                    int psId = psRs.getInt("fk_pessoa_governanca");
                    PessoaGovernanca ps = pgdao.getPessoaGovernanca(psId); 
                    governanca.addPessoasGovernanca(ps);
                }
	        }
	    } catch (Exception e){
	        System.out.println("Erro ao buscar a governança por id! - " + e);
	    } finally {
	        conn.close();
	    }
	    
	    return governanca;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
        	//EXCLUINDO PRIMEIRO DA TABELA POSSUI PRA NÃO DAR ERRO
        	String queryPossui = String.format("DELETE FROM possui "
            		+ "WHERE fk_id_governanca = %s", id);
           
            Statement possuiStatement = conn.createStatement();          
            possuiStatement.executeUpdate(queryPossui);
        	
            //EXCLUINDO DA TABELA GOVERNANÇA DE FATO
            String query = String.format("DELETE FROM governanca "
            		+ "WHERE id_gov = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir da tabela governança! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(Governanca gov) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("UPDATE governanca "
            		+ "SET dt_inicio = '%s', dt_fim = '%s', fk_empresa = %s"
            		+ "WHERE id_gov = %s", 
            		gov.getDtInicio(), gov.getDtFim(), 
            		gov.getEmpresa().getId(), gov.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar a governança! - " + e);
        }
        finally {
        	conn.close();
        }
	}

}
