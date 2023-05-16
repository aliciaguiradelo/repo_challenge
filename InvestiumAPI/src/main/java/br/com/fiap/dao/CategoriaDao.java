package br.com.fiap.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import br.com.fiap.connection.ConnectionFactory;
import br.com.fiap.model.Categoria;



public class CategoriaDao {

	public void insert(Categoria c) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("insert into categoria_java(id_categoria,descricao) values(%s,'%s')", c.getId(), c.getDescricao());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao inserir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public ArrayList<Categoria> getAll() throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        ArrayList<Categoria> list = null;
       
        try {
            String query= "select * from categoria_java order by id_categoria";
            
            statement=conn.createStatement();
           
            rs = statement.executeQuery(query);
           
            list = new ArrayList<Categoria>(); 
            while(rs.next()){
            	Categoria c = new Categoria();
            	c.setId(Integer.parseInt(rs.getString("id_categoria")));
            	c.setDescricao(rs.getString("descricao"));
            	
                list.add(c);
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return list;
	}

	public Categoria getCategoria(int id) throws SQLException {
		Connection conn = ConnectionFactory.getConnection();
        Statement statement;
        ResultSet rs = null;
        Categoria categoria = null;
        
        try {
            String query= String.format("select * from categoria_java where id_categoria = %s", id);
            
            statement=conn.createStatement();
           
            rs = statement.executeQuery(query);
           
            
            while(rs.next()){
            	categoria = new Categoria();
            	categoria.setId(Integer.parseInt(rs.getString("id_categoria")));
            	categoria.setDescricao(rs.getString("descricao"));
          
            }
        }catch (Exception e){
            System.out.println("Erro ao exibir a categoria! - " + e);
        }
        finally {
        	conn.close();
        }
        
        return categoria;
	}
	
	public void delete(int id) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("delete from categoria_java where id_categoria = %s", id);
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao excluir o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
	}

	public void update(Categoria c) throws SQLException {
        Connection conn = ConnectionFactory.getConnection();
        Statement statement;
       
        try {
            String query = String.format("update categoria_java set descricao = '%s' where id_categoria = %s", c.getDescricao(), c.getId());
           
            statement = conn.createStatement();          
            statement.executeUpdate(query);
        }catch (Exception e){
            System.out.println("Erro ao atualizar o usuário! - " + e);
        }
        finally {
        	conn.close();
        }
	}
}
