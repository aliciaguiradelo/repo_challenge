package devzilla;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class Programa {

	public static void main(String[] args) throws ParseException, IOException {

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		Scanner scn = new Scanner(System.in);

		ArrayList<Usuario> usuarios = new ArrayList<>();
		ArrayList<Postagem> postagens = new ArrayList<>();
		ArrayList<Categoria> categorias = new ArrayList<>();

		int opcao;
		String email, senha;
		int indexUsuarioLogado, indexPostagemGeral, indexPostagemUsuario, indexCategoria, indexComentario;
		Usuario usuarioLogado, usu;
		int id;
		Postagem post, postUsuario;
		char resposta, categoriaExistente;
		String novaCategoria, atuCategoria;
		Categoria cat;

		Usuario admin1 = new Usuario(1, "Ana", "ana@email.com.br", "senha123", sdf.parse("29/07/1996"), "admin");
		Usuario admin2 = new Usuario(2, "Diego", "diego@email.com.br", "senha@123", sdf.parse("09/02/1994"), "admin");

		usuarios.add(admin1);
		usuarios.add(admin2);

		do {
			System.out.printf("****** Bem-vindo ao Devzilla! ******\n\n");
			System.out.printf("1 - Fazer login\n" + "2 - Fazer cadastro\n" + "3 - Continuar sem logar\n");
			System.out.printf("Informe a opção desejada: ");
			opcao = scn.nextInt();

			if (opcao == 1) {

				System.out.printf("Informe o seu e-mail: ");
				email = scn.next();
				System.out.printf("Informe a sua senha: ");
				senha = scn.next();

				indexUsuarioLogado = -1;
				for (Usuario u : usuarios) {
					if ((u.getEmail().equals(email)) && (u.getSenha().equals(senha))) {
						System.out.printf("Usuário logado com sucesso!\n");
						indexUsuarioLogado = usuarios.indexOf(u);
						break;
					}
				}

				if (indexUsuarioLogado != -1) {
					usuarioLogado = usuarios.get(indexUsuarioLogado);

					do {
						if (usuarioLogado.getPapel().equals("comum")) {
							System.out.printf("--------------- MENU ---------------\n\n");
							System.out.printf("1 - Acessar Blog\n" + "2 - Acessar empresas\n");
							System.out.printf("Digite a opção desejada: ");
							opcao = scn.nextInt();

							if (opcao == 1) {
								for (Postagem p : postagens) {
									System.out.printf("ID: " + p.getId() + "Postagem: " + p.getTitulo() + "\n");
								}

								System.out.printf("Informe o ID da postagem que deseja visualizar: ");
								id = scn.nextInt();

								indexPostagemGeral = -1;
								for (Postagem p : postagens) {
									if (p.getId() == id) {
										indexPostagemGeral = postagens.indexOf(p);
									}
								}

								if (indexPostagemGeral != -1) {
									post = postagens.get(indexPostagemGeral);
									System.out.printf("************************************************");
									System.out.printf("\n\n\tTítulo: " + post.getTitulo() + "\n\nConteúdo: "
											+ post.getConteudo() + "\n\nImagem URL: " + post.getImgUrl() + "\n\nData: "
											+ sdf.format(post.getDate()) + "\t\t\tLikes: " + post.getLikes() + "\n");
									System.out.printf("************************************************\n\n");

									if (post.getComentarios() != null) {
										System.out.printf("Comentários:\n\n");
										for (Comentario c : post.getComentarios()) {
											System.out.printf(c.getUsuario().getNome() + ": " + c.getConteudo()
													+ "\t\tData: " + sdf.format(c.getData()));
										}
										System.out.printf("************************************************\n\n");
									}

									System.out.printf("Curtiu essa postagem?(S/N)");
									resposta = scn.next().toUpperCase().charAt(0);

									if (resposta == 'S') {
										post.setLikes(post.getLikes() + 1);
									}

									System.out.printf("\nGostaria de deixar um comentario nessa postagem?(S/N)");
									resposta = scn.next().toUpperCase().charAt(0);

									if (resposta == 'S') {
										Comentario comentario = new Comentario();

										if (post.getComentarios().size() > 0) {
											comentario.setId(
													post.getComentarios().get(post.getComentarios().size() - 1).getId()
															+ 1);
										} else {
											comentario.setId(1);
										}

										System.out.printf("Entre com o seu comentário: ");
										comentario.setConteudo(scn.next());
										comentario.setData(new Date());
										comentario.setUsuario(usuarioLogado);

										post.addComentario(comentario);
										System.out.println("Comentário realizado com sucesso!");
									}

								} else {
									System.out.printf("Postagem não encontrada\n\n");
								}
							}
						} else if (usuarioLogado.getPapel().equals("admin")) {
							System.out.printf("--------------- MENU ---------------\n\n");
							System.out.printf("1 - Cadastrar postagem\n" + "2 - Atualizar postagem\n"
									+ "3 - Excluir postagem\n" + "4 - Listar postagens\n" + "5 - Criar categoria\n"
									+ "6 - Atualizar categoria\n" + "7 - Excluir categoria\n"
									+ "8 - Listar categorias\n" + "9 - Listar comentários\n"
									+ "10 - Excluir comentário\n" + "11 - Sair\n");
							System.out.printf("Informe a opção desejada: ");
							opcao = scn.nextInt();

							if (opcao == 1) {
								Postagem postagem = new Postagem();

								if (postagens.size() > 0) {
									postagem.setId(postagens.get(postagens.size() - 1).getId() + 1);
								} else {
									postagem.setId(1);
								}

								System.out.printf("Título da postagem: ");
								postagem.setTitulo(scn.next());
								System.out.printf("Conteúdo da postagem: ");
								postagem.setConteudo(scn.next());
								System.out.printf("URL da imagem: ");
								postagem.setImgUrl(scn.next());
								postagem.setDate(new Date());
								postagem.setUsuario(usuarioLogado);

								System.out.printf("Essa postagem possui uma categoria?");
								resposta = scn.next().toUpperCase().charAt(0);

								if (resposta == 'S') {
									for (Categoria c : categorias) {
										System.out.println("ID: " + c.getId() + "Categoria: " + c.getDescricao());
									}

									System.out.printf("Informe o ID da categoria que deseja cadastrar a postagem: ");
									id = scn.nextInt();

									indexCategoria = -1;
									for (Categoria c : categorias) {
										if (c.getId() == id) {
											indexCategoria = categorias.indexOf(c);
										}
									}

									if (indexCategoria != -1) {
										cat = categorias.get(indexCategoria);

										cat.addPostagem(postagem);
									} else {
										System.out.printf("Categoria não encontrada\n\n");
									}
								}

								postagens.add(postagem);
								System.out.printf("Postagem cadastrada com sucesso!\n\n");

								if (postagem.getUsuario() == usuarioLogado) {
									usuarioLogado.addPostagem(postagem);
								}

								for (Postagem p : postagens) {
									System.out.printf("ID: " + p.getId() + "\tTítulo: " + p.getTitulo() + "\tConteúdo: "
											+ p.getConteudo() + "\tImagem URL: " + p.getImgUrl() + "\tData: "
											+ sdf.format(p.getDate()) + "\tLikes: " + p.getLikes() + "\n");
								}

								for (Postagem p : usuarioLogado.getPostagens()) {
									System.out.printf("ID: " + p.getId() + "\tTítulo: " + p.getTitulo() + "\tConteúdo: "
											+ p.getConteudo() + "\tImagem URL: " + p.getImgUrl() + "\tData: "
											+ sdf.format(p.getDate()) + "\tLikes: " + p.getLikes() + "\n");
								}

								System.in.read();

							} else if (opcao == 2) {
								for (Postagem p : postagens) {
									System.out.printf("ID: " + p.getId() + "Postagem: " + p.getTitulo() + "\n");
								}

								System.out.printf("Informe o ID da postagem que deseja atualizar: ");
								id = scn.nextInt();

								indexPostagemGeral = -1;
								for (Postagem p : postagens) {
									if (p.getId() == id) {
										indexPostagemGeral = postagens.indexOf(p);
									}
								}

								if (indexPostagemGeral != 1) {
									post = postagens.get(indexPostagemGeral);

									usu = post.getUsuario();

									System.out.printf("Digite o novo título: ");
									post.setTitulo(scn.next());
									System.out.printf("Digite o novo conteúdo: ");
									post.setConteudo(scn.next());
									System.out.println("Digite a nova url da imagem: ");
									post.setImgUrl(scn.next());

									indexPostagemUsuario = -1;
									for (Postagem p : usu.getPostagens()) {
										if (p.getId() == id) {
											indexPostagemUsuario = usu.getPostagens().indexOf(p);
											break;
										}
									}

									if (indexPostagemUsuario != -1) {
										postUsuario = usu.getPostagens().get(indexPostagemUsuario);
										postUsuario.setTitulo(post.getTitulo());
										postUsuario.setConteudo(post.getConteudo());
										postUsuario.setImgUrl(post.getImgUrl());

									}

									System.out.printf("Postagem atualizada com sucesso!\n\n");
								} else {
									System.out.printf("Postagem não encontrada\n\n");
								}

								System.in.read();

							} else if (opcao == 3) {
								for (Postagem p : postagens) {
									System.out.printf("ID: " + p.getId() + "Postagem: " + p.getTitulo() + "\n");
								}

								System.out.printf("Informe o ID da postagem que deseja excluir: ");
								id = scn.nextInt();

								indexPostagemGeral = -1;
								for (Postagem p : postagens) {
									if (p.getId() == id) {
										indexPostagemGeral = postagens.indexOf(p);
									}
								}

								if (indexPostagemGeral != -1) {
									post = postagens.get(indexPostagemGeral);

									usu = post.getUsuario();

									indexPostagemUsuario = -1;
									for (Postagem p : usu.getPostagens()) {
										if (p.getId() == id) {
											indexPostagemUsuario = usu.getPostagens().indexOf(p);
										}
									}

									usu.getPostagens().remove(indexPostagemUsuario);
									postagens.remove(indexPostagemGeral);
									System.out.printf("Postagem excluída com sucesso\n\n");

									for (Postagem p : postagens) {
										System.out.printf("ID: " + p.getId() + "\tTítulo: " + p.getTitulo()
												+ "\tConteúdo: " + p.getConteudo() + "\tImagem URL: " + p.getImgUrl()
												+ "\tData: " + sdf.format(p.getDate()) + "\tLikes: " + p.getLikes()
												+ "\n");
									}

									for (Postagem p : usuarioLogado.getPostagens()) {
										System.out.printf("ID: " + p.getId() + "\tTítulo: " + p.getTitulo()
												+ "\tConteúdo: " + p.getConteudo() + "\tImagem URL: " + p.getImgUrl()
												+ "\tData: " + sdf.format(p.getDate()) + "\tLikes: " + p.getLikes()
												+ "\n");
									}
								} else {
									System.out.printf("Postagem não encontrada\n\n");
								}

								System.in.read();

							} else if (opcao == 4) {
								for (Postagem p : postagens) {
									System.out.printf("ID: " + p.getId() + "\tPostagem: " + p.getTitulo() + "\n");
								}

								System.out.printf("Deseja ver uma postagem com mais detalhe?(S/N)");
								resposta = scn.next().toUpperCase().charAt(0);

								if (resposta == 'S') {
									System.out.printf("Informe o ID da postagem que deseja visualizar: ");
									id = scn.nextInt();

									indexPostagemGeral = -1;
									for (Postagem p : postagens) {
										if (p.getId() == id) {
											indexPostagemGeral = postagens.indexOf(p);
										}
									}

									if (indexPostagemGeral != -1) {
										post = postagens.get(indexPostagemGeral);
										System.out.printf("ID: " + post.getId() + "\tTítulo: " + post.getTitulo()
												+ "\tConteúdo: " + post.getConteudo() + "\tImagem URL: "
												+ post.getImgUrl() + "\tData: " + sdf.format(post.getDate())
												+ "\tLikes: " + post.getLikes() + "\n");

									} else {
										System.out.printf("Postagem não encontrada\n\n");
									}
								}

								System.in.read();

							} else if (opcao == 5) {
								Categoria categoria = new Categoria();

								if (categorias.size() > 0) {
									categoria.setId(categorias.get(categorias.size() - 1).getId() + 1);
								} else {
									categoria.setId(1);
								}

								System.out.println("Digite o nome da categoria");
								novaCategoria = scn.next();

								categoriaExistente = 'N';
								for (Categoria c : categorias) {
									if (c.getDescricao().equals(novaCategoria)) {
										categoriaExistente = 'S';
										break;
									}
								}

								if (categoriaExistente == 'N') {
									categoria.setDescricao(novaCategoria);
									categorias.add(categoria);
									System.out.printf("Categoria criada com sucesso!\n\n");
								} else {
									System.out.printf("Categoria já existente\n\n");
								}

								System.in.read();

							} else if (opcao == 6) {
								for (Categoria c : categorias) {
									System.out.println("ID: " + c.getId() + "Categoria: " + c.getDescricao());
								}

								System.out.printf("Informe o ID da categoria que deseja atualizar: ");
								id = scn.nextInt();

								indexCategoria = -1;
								for (Categoria c : categorias) {
									if (c.getId() == id) {
										indexCategoria = categorias.indexOf(c);
										break;
									}
								}

								if (indexCategoria != -1) {
									cat = categorias.get(indexCategoria);

									System.out.printf("Digite o novo nome da categoria: ");
									atuCategoria = scn.next();

									categoriaExistente = 'N';
									for (Categoria c : categorias) {
										if (c.getDescricao().equals(atuCategoria)) {
											categoriaExistente = 'S';
											break;
										}
									}

									if (categoriaExistente == 'N') {
										cat.setDescricao(atuCategoria);
										System.out.printf("Categoria atualizada com sucesso!\n\n");
									} else {
										System.out.printf("Categoria já existente\n\n");
									}

								} else {
									System.out.printf("Categoria não encontrada!\n\n");
								}

								System.in.read();

							} else if (opcao == 7) {
								for (Categoria c : categorias) {
									System.out.println("ID: " + c.getId() + "Categoria: " + c.getDescricao());
								}

								System.out.printf("Informe o ID da categoria que deseja excluir: ");
								id = scn.nextInt();

								indexCategoria = -1;
								for (Categoria c : categorias) {
									if (c.getId() == id) {
										indexCategoria = categorias.indexOf(c);
										break;
									}
								}

								if (indexCategoria != -1) {
									categorias.remove(indexCategoria);
									System.out.printf("Categoria excluída com sucesso!");
								} else {
									System.out.printf("Categoria não encontrada");
								}

								System.in.read();

							} else if (opcao == 8) {
								System.out.printf("");
								for (Categoria c : categorias) {
									System.out.println("ID: " + c.getId() + "\tCategoria: " + c.getDescricao());
								}

								System.out.printf("Gostaria de ver as postagens associadas à alguma categoria?");
								resposta = scn.next().toUpperCase().charAt(0);

								if (resposta == 'S') {
									for (Categoria c : categorias) {
										System.out.println("ID: " + c.getId() + "Categoria: " + c.getDescricao());
									}
									
									System.out.printf("Informe o ID da categoria que deseja visualizar as postagens relacionadas: ");
									id = scn.nextInt();

									indexCategoria = -1;
									for (Categoria c : categorias) {
										if (c.getId() == id) {
											indexCategoria = categorias.indexOf(c);
										}
									}
									
									if(indexCategoria != -1) {
										cat = categorias.get(indexCategoria);
										
										for(Postagem p: cat.getPostagens()) {
											System.out.printf("ID: " + p.getId() + "\tPostagem: " + p.getTitulo() + "\tData: " + sdf.format(p.getDate()) + "\n");
										}
									}else {
										System.out.printf("Categoria não encontrada!");
									}
								}
								
								System.in.read();
								
							} else if (opcao == 9) {
								do {
									for (Postagem p : postagens) {
										System.out.printf("ID: " + p.getId() + "Postagem: " + p.getTitulo() + "\n");
									}

									System.out
											.printf("Informe o ID da postagem que deseja visualizar os comentários: ");
									id = scn.nextInt();

									indexPostagemGeral = -1;
									for (Postagem p : postagens) {
										if (p.getId() == id) {
											indexPostagemGeral = postagens.indexOf(p);
										}
									}

									if (indexPostagemGeral != -1) {
										post = postagens.get(indexPostagemGeral);

										if (post.getComentarios().size() > 0) {
											for (Comentario c : post.getComentarios()) {
												c.exibirComentario();
											}
										} else {
											System.out.printf("Essa postagem ainda não possui comentários!\n");
										}
									} else {
										System.out.printf("Postagem não encontrada!\n");
									}

									System.out.print("Deseja ver os comentários de outra postagem?");
									resposta = scn.next().toUpperCase().charAt(0);

								} while (resposta != 'N');
							} else if (opcao == 10) {
								for (Postagem p : postagens) {
									System.out.printf("ID: " + p.getId() + "Postagem: " + p.getTitulo() + "\n");
								}

								System.out.printf("Informe o ID da postagem que deseja excluir um comentário: ");
								id = scn.nextInt();

								indexPostagemGeral = -1;
								for (Postagem p : postagens) {
									if (p.getId() == id) {
										indexPostagemGeral = postagens.indexOf(p);
									}
								}

								if (indexPostagemGeral != -1) {
									post = postagens.get(indexPostagemGeral);

									if (post.getComentarios().size() > 0) {
										for (Comentario c : post.getComentarios()) {
											c.exibirComentario();
										}

										System.out.printf("Informe o ID do comentário que deseja excluir: ");
										id = scn.nextInt();

										indexComentario = -1;
										for (Comentario c : post.getComentarios()) {
											if (c.getId() == id) {
												indexComentario = post.getComentarios().indexOf(c);
											}
										}

										if (indexComentario != -1) {
											post.getComentarios().remove(indexComentario);
											System.out.printf("Comentário excluído com sucesso!\n");
										} else {
											System.out.printf("Comentário não encontrado!");
										}

									} else {
										System.out.printf("Essa postagem ainda não possui comentários!\n");
									}
								} else {
									System.out.printf("Postagem não encontrada!\n");
								}
							}
						} else {
							System.out.printf("Login ou senha inválidos!");
						}
					} while (opcao >= 1 && opcao <= 10);

				}

				opcao = 1;

			} else if (opcao == 2) {
				Usuario usuario = new Usuario();

				if (usuarios.size() > 0) {
					usuario.setId(usuarios.get(usuarios.size() - 1).getId() + 1);
				} else {
					usuario.setId(1);
				}

				System.out.printf("Digite seu nome: ");
				usuario.setNome(scn.next());
				System.out.printf("Digite seu e-mail: ");
				usuario.setEmail(scn.next());
				System.out.printf("Digite sua senha: ");
				usuario.setSenha(scn.next());
				System.out.printf("Digite sua data de nascimento(DD/MM/YYYY): ");
				usuario.setDtNascimento(sdf.parse(scn.next()));

				usuario.setPapel("comum");

				usuarios.add(usuario);

				System.out.printf("Usuário cadastrado com sucesso!\n");

				for (Usuario u : usuarios) {
					System.out.println("ID: " + u.getId() + "\tNome: " + u.getNome() + "\tEmail: " + u.getEmail()
							+ "\tSenha: " + u.getSenha() + "\tData Nascimento: " + u.getDtNascimento() + "\tPapel: "
							+ u.getPapel() + "\n");
				}

				System.in.read();
			} else if (opcao == 3) {
				for (Postagem p : postagens) {
					System.out.printf("ID: " + p.getId() + "Postagem: " + p.getTitulo() + "\n");
				}

				System.out.printf("Informe o ID da postagem que deseja visualizar: ");
				id = scn.nextInt();

				indexPostagemGeral = -1;
				for (Postagem p : postagens) {
					if (p.getId() == id) {
						indexPostagemGeral = postagens.indexOf(p);
					}
				}

				if (indexPostagemGeral != -1) {
					post = postagens.get(indexPostagemGeral);
					System.out.printf("************************************************");
					System.out.printf("\n\n\tTítulo: " + post.getTitulo() + "\n\nConteúdo: " + post.getConteudo()
							+ "\n\nImagem URL: " + post.getImgUrl() + "\n\nData: " + sdf.format(post.getDate())
							+ "\t\t\tLikes: " + post.getLikes() + "\n");
					System.out.printf("************************************************\n\n");

					if (post.getComentarios() != null) {
						System.out.printf("Comentários:\n\n");
						for (Comentario c : post.getComentarios()) {
							System.out.printf(c.getUsuario().getNome() + ": " + c.getConteudo() + "\t\tData: "
									+ sdf.format(c.getData()));
						}
						System.out.printf("************************************************\n\n");
					}

					System.out.printf("Para curtir e comentar é necessário estar logado!\n");
					System.out.printf("Gostaria de realizar o login/cadastro?(S/N)");
					resposta = scn.next().toUpperCase().charAt(0);

					if (resposta == 'S') {
						System.out.printf("Já possui conta?(S/N)");
						resposta = scn.next().toUpperCase().charAt(0);

						if (resposta == 'S') {
							System.out.printf("Informe o seu e-mail: ");
							email = scn.next();
							System.out.printf("Informe a sua senha: ");
							senha = scn.next();

							indexUsuarioLogado = -1;
							for (Usuario u : usuarios) {
								if ((u.getEmail().equals(email)) && (u.getSenha().equals(senha))) {
									System.out.printf("Usuário logado com sucesso!\n");
									indexUsuarioLogado = usuarios.indexOf(u);
									break;
								}
							}

							if (indexUsuarioLogado != -1) {
								usuarioLogado = usuarios.get(indexUsuarioLogado);

								System.out.printf("Curtiu essa postagem?(S/N)");
								resposta = scn.next().toUpperCase().charAt(0);

								if (resposta == 'S') {
									post.setLikes(post.getLikes() + 1);
								}

								System.out.printf("\nGostaria de deixar um comentario nessa postagem?(S/N)");
								resposta = scn.next().toUpperCase().charAt(0);

								if (resposta == 'S') {
									Comentario comentario = new Comentario();

									if (post.getComentarios().size() > 0) {
										comentario.setId(
												post.getComentarios().get(post.getComentarios().size() - 1).getId()
														+ 1);
									} else {
										comentario.setId(1);
									}

									System.out.printf("Entre com o seu comentário: ");
									comentario.setConteudo(scn.next());
									comentario.setData(new Date());
									comentario.setUsuario(usuarioLogado);

									post.addComentario(comentario);
									System.out.println("Comentário realizado com sucesso!");
								}
							} else {
								System.out.printf("Usuário não encontrado");
							}
						} else {
							Usuario usuario = new Usuario();

							if (usuarios.size() > 0) {
								usuario.setId(usuarios.get(usuarios.size() - 1).getId() + 1);
							} else {
								usuario.setId(1);
							}

							System.out.printf("Digite seu nome: ");
							usuario.setNome(scn.next());
							System.out.printf("Digite seu e-mail: ");
							usuario.setEmail(scn.next());
							System.out.printf("Digite sua senha: ");
							usuario.setSenha(scn.next());
							System.out.printf("Digite sua data de nascimento(DD/MM/YYYY): ");
							usuario.setDtNascimento(sdf.parse(scn.next()));

							usuario.setPapel("comum");

							usuarios.add(usuario);

							System.out.printf("Usuário cadastrado com sucesso!\n");

							for (Usuario u : usuarios) {
								System.out.println("ID: " + u.getId() + "\tNome: " + u.getNome() + "\tEmail: "
										+ u.getEmail() + "\tSenha: " + u.getSenha() + "\tData Nascimento: "
										+ u.getDtNascimento() + "\tPapel: " + u.getPapel() + "\n");
							}

							System.in.read();
						}
					}
				}

			}

		} while (opcao >= 1 && opcao <= 3);

	}
}
