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

import br.com.fiap.bo.IndicadorFinanceiroBO;
import br.com.fiap.model.IndicadorFinanceiro;

@Path("/indicadorFinanceiro")
public class IndicadorFinanceiroResource {
	private IndicadorFinanceiroBO indicadorFinanceiroBO = new IndicadorFinanceiroBO();
	
	@GET
	@Path("/byEmpresa/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<IndicadorFinanceiro> buscarPorEmpresa(@PathParam("id")int id) throws SQLException {
		return indicadorFinanceiroBO.getByEmpresa(id);
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public IndicadorFinanceiro buscar(@PathParam("id")int id) throws SQLException {
		return indicadorFinanceiroBO.getIndicador(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	/*RESPONSE É CLASSE DO PACOTE JAVAX ELA GERA O HTTP COMO RETORNO*/
	public Response cadastrar(IndicadorFinanceiro indicador, @Context UriInfo uriInfo) throws SQLException {
		/*INSERIR NA BASE*/
		indicadorFinanceiroBO.insert(indicador);
		/*CONSTRUIR O CAMINHO(PATH DE RETORNO PEGANDO TODO O MEU URI*/
	UriBuilder builder = uriInfo.getAbsolutePathBuilder();
	/*MONTAR O CAMINHO E PEGAR O CODIGO*/
	builder.path(Integer.toString(indicador.getId()));
	/*RETORNAR O CAMINHO E O STATUS CODE 201*/
	return Response.created(builder.build()).build();
	}
}
