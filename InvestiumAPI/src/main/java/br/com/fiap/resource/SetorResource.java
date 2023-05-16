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

import br.com.fiap.bo.SetorBo;
import br.com.fiap.model.Setor;

@Path("/setor")
public class SetorResource {

	private SetorBo setorBO = new SetorBo();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Setor> buscar() throws SQLException {
		return setorBO.getAll();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Setor buscarSetor(@PathParam("id")int id) throws SQLException {
		return setorBO.getSetor(id);
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
	public Response cadastrar(Setor setor, @Context UriInfo uriInfo) throws SQLException {
		/*INSERIR NA BASE*/
		setorBO.insert(setor);;
		/*CONSTRUIR O CAMINHO(PATH DE RETORNO PEGANDO TODO O MEU URI*/
	UriBuilder builder = uriInfo.getAbsolutePathBuilder();
	/*MONTAR O CAMINHO E PEGAR O CODIGO*/
	builder.path(Integer.toString(setor.getId()));
	/*RETORNAR O CAMINHO E O STATUS CODE 201*/
	return Response.created(builder.build()).build();
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualiza (Setor setor, @PathParam("id") int id) throws SQLException {
		setorBO.update(setor);
		return Response.ok().build();
	}
	
	@DELETE
	@Path("/{id}")
	public void exlcuir(@PathParam("id") int id) throws SQLException
	{
		setorBO.delete(id);
	}
}
