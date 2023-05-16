package br.com.fiap.program;

import java.sql.SQLException;

import br.com.fiap.dao.CategoriaDao;
import br.com.fiap.model.Categoria;

public class Programa {

	public static void main(String[] args) throws SQLException {
		 CategoriaDao cat = new CategoriaDao();
		 
		 for(Categoria c: cat.getAll()) {
			 System.out.println(c.getDescricao());
		 }

	}

}
