package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Ativo;
import br.com.fiap.model.Balanco;
import br.com.fiap.model.Passivo;

public class BalancoDao {
	
	AtivoDao adao = new AtivoDao();
	PassivoDao pdao = new PassivoDao();
	EmpresaDao edao = new EmpresaDao();
	
	public void insert(Balanco balanco) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("INSERT INTO balanco"
            		+ "(id_balanco, patrimonio_liq, dt_inicio, dt_final, fk_empresa) "
            		+ "VALUES (%s, %s, '%s', '%s', %s)", 
            		balanco.getId(), balanco.getPatrimonioLiquido(),
            		balanco.getDtInicio(), balanco.getDtFinal(),
            		balanco.getEmpresa().getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
            
            for(Ativo ativo : balanco.getAtivos()) {
            	adao.insert(ativo);
            }
            
            for (Passivo passivo : balanco.getPassivos()) {
            	pdao.insert(passivo);
            }
            
        }catch (Exception e){
            System.out.println("Erro ao inserir na tabela Balanço! - " + e);
        }
        finally {
        	conn.close();
        }
	}
	
	public ArrayList<Balanco> getByEmpresa(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<Balanco> list = null;
       
        try {
            String query = String.format("SELECT * FROM balanco "
            		+ "WHERE fk_empresa = %s ORDER BY id_balanco", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Balanco>(); 
            
            while(rs.next()){
            	Balanco balanco = new Balanco();
            	balanco.setId(rs.getInt("id_balanco"));
            	balanco.setDtInicio(rs.getDate("dt_inicio"));
            	balanco.setDtFinal(rs.getDate("dt_final"));
            	balanco.setPatrimonioLiquido(rs.getDouble("patrimonio_liq"));
            	
            	int id_empresa = rs.getInt("fk_empresa");
            	
            	balanco.setEmpresa(edao.getEmpresa(id_empresa));
            	
            	//PEGANDO CADA ATIVO RELACIONADO AO BALANÇO
                String atvQuery = "SELECT * FROM ativo WHERE fk_balanco = " 
            	+ balanco.getId();
                
                Statement atvStatement = conn.createStatement();
                ResultSet atvRs = atvStatement.executeQuery(atvQuery);
                
                while(atvRs.next()) {
                    int atvId = atvRs.getInt("id_ativo");
                    // método para buscar o ativo na tabela ativo
                    Ativo ativo = adao.getAtivo(atvId); 
                    balanco.addAtivo(ativo);
                }
                
              //PEGANDO CADA PASSIVO RELACIONADO AO BALANÇO
                String psvQuery = "SELECT * FROM passivo WHERE fk_balanco = " 
            	+ balanco.getId();
                
                Statement psvStatement = conn.createStatement();
                ResultSet psvRs = psvStatement.executeQuery(psvQuery);
                
                while(psvRs.next()) {
                    int psvId = psvRs.getInt("id_passivo");
                    // método para buscar o passivo na tabela passivo
                    Passivo passivo = pdao.getPassivo(psvId); 
                    balanco.addPassivo(passivo);
                }
            	  
                list.add(balanco);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir da tabela balanço! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}
	
	public Balanco getBalanco(int id) throws SQLException {
	    Connection conn = ConnectionFactory.getConnection();
	    Statement statement;
	    ResultSet rs = null;
	    Balanco balanco = null;
	   
	    try {
	        String query = "SELECT * FROM balanco WHERE id_balanco = " + id;
	        
	        statement = conn.createStatement();
	        rs = statement.executeQuery(query);
	       
	        if (rs.next()){
	        	balanco.setId(rs.getInt("id_balanco"));
            	balanco.setDtInicio(rs.getDate("dt_inicio"));
            	balanco.setDtFinal(rs.getDate("dt_final"));
            	balanco.setPatrimonioLiquido(rs.getDouble("patrimonio_liq"));
            	
            	int id_empresa = rs.getInt("fk_empresa");
            	
            	balanco.setEmpresa(edao.getEmpresa(id_empresa));
            	
            	//PEGANDO CADA ATIVO RELACIONADO AO BALANÇO
                String atvQuery = "SELECT * FROM ativo WHERE fk_balanco = " 
            	+ balanco.getId();
                
                Statement atvStatement = conn.createStatement();
                ResultSet atvRs = atvStatement.executeQuery(atvQuery);
                
                while(atvRs.next()) {
                    int atvId = atvRs.getInt("id_ativo");
                    // método para buscar o ativo na tabela ativo
                    Ativo ativo = adao.getAtivo(atvId); 
                    balanco.addAtivo(ativo);
                }
                
              //PEGANDO CADA PASSIVO RELACIONADO AO BALANÇO
                String psvQuery = "SELECT * FROM passivo WHERE fk_balanco = " 
            	+ balanco.getId();
                
                Statement psvStatement = conn.createStatement();
                ResultSet psvRs = psvStatement.executeQuery(psvQuery);
                
                while(psvRs.next()) {
                    int psvId = psvRs.getInt("id_passivo");
                    // método para buscar o passivo na tabela passivo
                    Passivo passivo = pdao.getPassivo(psvId); 
                    balanco.addPassivo(passivo);
                }
	        }
	    } catch (Exception e){
	        System.out.println("Erro ao buscar a governança por id! - " + e);
	    } finally {
	        conn.close();
	    }
	    
	    return balanco;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {       
            String query = String.format("DELETE FROM balanco "
            		+ "WHERE id_balanco = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir da tabela balanço! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(Balanco balanco) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
        	
            String query = String.format("UPDATE balanco "
            		+ "SET patrimonio_liq = %s, dt_inicio = '%s', "
            		+ "dt_final = '%s', fk_empresa = %s"
            		+ "WHERE id_balanco = %s", 
            		balanco.getPatrimonioLiquido(),
            		balanco.getDtInicio(), balanco.getDtFinal(),
            		balanco.getEmpresa().getId(), balanco.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar o balanço! - " + e);
        }
        finally {
        	conn.close();
        }
	}
}
