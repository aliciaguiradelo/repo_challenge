package br.com.fiap.resource;

import java.sql.SQLException;
import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
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

import br.com.fiap.bo.UsuarioBo;
import br.com.fiap.model.Usuario;
import br.com.fiap.model.UsuarioIpo;
import br.com.fiap.model.UsuarioPostagem;

@Path("/usuario")
public class UsuarioResource {
	
	private UsuarioBo usuarioBo = new UsuarioBo();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Usuario> buscar() throws SQLException {
		return usuarioBo.getAll();
	}
	
	@GET
	@Path("/{email}/{senha}")
	@Produces(MediaType.APPLICATION_JSON)
	public Usuario buscar(@PathParam("email")String email, @PathParam("senha")String senha) throws SQLException {
		return usuarioBo.getUsuario(email, senha);
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
	public Response cadastrar(Usuario usuario, @Context UriInfo uriInfo) throws SQLException {
		/*INSERIR NA BASE*/
		usuarioBo.insert(usuario);;
		/*CONSTRUIR O CAMINHO(PATH DE RETORNO PEGANDO TODO O MEU URI*/
	UriBuilder builder = uriInfo.getAbsolutePathBuilder();
	/*MONTAR O CAMINHO E PEGAR O CODIGO*/
	builder.path(usuario.getEmail());
	/*RETORNAR O CAMINHO E O STATUS CODE 201*/
	return Response.created(builder.build()).build();
	}
	
	@POST
	@Path("/salvarpostagem")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(UsuarioPostagem usuarioPostagem) throws SQLException{
		usuarioBo.salvarPostagem(usuarioPostagem);;
		return Response.status(Response.Status.CREATED).build();
	}
	
	@POST
	@Path("/salvarempresa")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(UsuarioIpo usuarioIpo) throws SQLException{
		usuarioBo.salvarIpo(usuarioIpo);;
		return Response.status(Response.Status.CREATED).build();
	}
	
	/*
	@PUT
	@Path("/{email}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response atualiza (Usuario usuario, @PathParam("email") String email) throws SQLException {
		usuarioBo.update(usuario);
		return Response.ok().build();
	}
	*/
	
	@DELETE
	@Path("/{email}")
	public void excluir(@PathParam("email") String email) throws SQLException
	{
		usuarioBo.delete(email);
	}

	
}
