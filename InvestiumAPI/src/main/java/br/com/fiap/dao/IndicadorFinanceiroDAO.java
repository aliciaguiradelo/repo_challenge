package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.IndicadorFinanceiro;

public class IndicadorFinanceiroDAO {
	
	EmpresaDao edao = new EmpresaDao();
	
	public void insert(IndicadorFinanceiro i) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("INSERT INTO indicador_financeiro "
            		+ "(id_indicador, descricao, tipo, valor, ano, fk_empresa)"
            		+ " VALUES (%s, '%s', '%s', '%s', '%s', %S)", 
            		i.getId(), i.getDescricao(), i.getTipo(),
            		i.getValor(), i.getAno(), i.getEmpresa().getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao inserir o indicador financeiro! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<IndicadorFinanceiro> getByEmpresa(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<IndicadorFinanceiro> list = null;
       
        try {
            String query = String.format("SELECT * from indicador_financeiro "
            		+ "WHERE fk_empresa = %s ORDER BY id_indicador", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
           
            list = new ArrayList<IndicadorFinanceiro>(); 
            
            while(rs.next()){
            	IndicadorFinanceiro indicador = new IndicadorFinanceiro();
            	indicador.setId(rs.getInt("id_indicador"));
            	indicador.setDescricao(rs.getString("descricao"));
            	indicador.setAno(rs.getDate("ano"));
            	indicador.setTipo(rs.getString("tipo"));
            	indicador.setValor(rs.getString("valor"));
//            	OBS.: A empresa foi removida pois não é completamente necessária no front para
//            	essa requisição em específico e poderia deixar a aplicação mais lenta
//            	indicador.setEmpresa(edao.getEmpresa(rs.getInt("fk_empresa")));
            	
                list.add(indicador);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir os indicadores por empresa! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}

	public IndicadorFinanceiro getIndicador(int id) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        IndicadorFinanceiro indicador = null;
        
        try {
            String query = String.format("SELECT * FROM indicador_financeiro WHERE id_indicador = %s", id);
            
            statement = conn.createStatement();
            rs = statement.executeQuery(query);
            
            while(rs.next()){
            	indicador = new IndicadorFinanceiro();
            	indicador.setId(rs.getInt("id_setor"));
            	indicador.setDescricao(rs.getString("descricao"));
            	indicador.setAno(rs.getDate("ano"));
            	indicador.setTipo(rs.getString("tipo"));
            	indicador.setValor(rs.getString("valor"));
            	indicador.setEmpresa(edao.getEmpresa(rs.getInt("fk_empresa")));
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o indicador financeiro! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return indicador;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("DELETE FROM indicador_financeiro "
            		+ "WHERE id_indicador = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir o indicador financeiro! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(IndicadorFinanceiro i) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
        	String query = String.format("UPDATE indicador_financeiro "
            		+ "SET descricao = '%s', "
            		+ "tipo = '%s', valor = '%s', ano = '%s', fk_empresa = %s')"
            		+ " VALUES (%s, '%s', '%s', '%s', '%s', %S) WHERE id_indicador = %s", 
            		i.getDescricao(), i.getTipo(), i.getValor(), 
            		i.getAno(), i.getEmpresa().getId(), i.getId());
        	
           
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
