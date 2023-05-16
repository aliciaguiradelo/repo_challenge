package br.com.fiap.resource;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import br.com.fiap.bo.EmpresaBo;
import br.com.fiap.model.Empresa;

@Path("/empresa")
public class EmpresaResource {
	private EmpresaBo empresaBo = new EmpresaBo();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Empresa> buscar() throws SQLException {
		return empresaBo.getAll();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Empresa buscar(@PathParam("id")int id) throws SQLException {
		return empresaBo.getEmpresa(id);
	}
	
	/*
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	*/
	/*RESPONSE É CLASSE DO PACOTE JAVAX ELA GERA O HTTP COMO RETORNO*/
	/*
	public Response cadastrar(Categoria categoria) throws SQLException {
		categoriaBO.insert(categoria);;
		return Response.status(Response.Status.CREATED).entity(categoria).build();
	}
	
	*/
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	/*RESPONSE É CLASSE DO PACOTE JAVAX ELA GERA O HTTP COMO RETORNO*/
	public Response cadastrar(Empresa empresa, @Context UriInfo uriInfo) throws SQLException {
		/*INSERIR NA BASE*/
		empresaBo.insert(empresa);;
		/*CONSTRUIR O CAMINHO(PATH DE RETORNO PEGANDO TODO O MEU URI*/
	UriBuilder builder = uriInfo.getAbsolutePathBuilder();
	/*MONTAR O CAMINHO E PEGAR O CODIGO*/
	builder.path(Integer.toString(empresa.getId()));
	/*RETORNAR O CAMINHO E O STATUS CODE 201*/
	return Response.created(builder.build()).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualiza (Empresa empresa, @PathParam("id") int id) throws SQLException {
		empresaBo.update(empresa);
		return Response.ok().build();
	}
	
	@DELETE
	@Path("/{id}")
	public void exlcuir(@PathParam("id") int id) throws SQLException
	{
		empresaBo.delete(id);
	}

}
