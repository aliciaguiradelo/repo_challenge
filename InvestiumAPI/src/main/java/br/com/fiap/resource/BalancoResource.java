package br.com.fiap.resource;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

import br.com.fiap.bo.BalancoBo;
import br.com.fiap.model.Balanco;

@Path("/balanco")
public class BalancoResource {
	private BalancoBo balancoBo = new BalancoBo();
	
	@GET
	@Path("/byEmpresa/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Balanco> buscarPorEmpresa(@PathParam("id")int id) throws SQLException {
		return balancoBo.getByEmpresa(id);
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Balanco buscar(@PathParam("id")int id) throws SQLException {
		return balancoBo.getIndicador(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	/*RESPONSE É CLASSE DO PACOTE JAVAX ELA GERA O HTTP COMO RETORNO*/
	public Response cadastrar(Balanco balanco, @Context UriInfo uriInfo) throws SQLException {
		/*INSERIR NA BASE*/
		balancoBo.insert(balanco);
		/*CONSTRUIR O CAMINHO(PATH DE RETORNO PEGANDO TODO O MEU URI*/
	UriBuilder builder = uriInfo.getAbsolutePathBuilder();
	/*MONTAR O CAMINHO E PEGAR O CODIGO*/
	builder.path(Integer.toString(balanco.getId()));
	/*RETORNAR O CAMINHO E O STATUS CODE 201*/
	return Response.created(builder.build()).build();
	}
}
