package centrallogique.api;

import centrallogique.api.enuns.Papel;
import centrallogique.api.enuns.TipoContato;
import centrallogique.api.model.*;
import centrallogique.api.repository.ContatoRepository;
import centrallogique.api.repository.EnderecoRepository;
import centrallogique.api.repository.FornecedorRepository;
import centrallogique.api.repository.UsuarioRepository;
import centrallogique.api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@SpringBootApplication
public class CentralLogiqueApplication {

	@Resource
	FilesStorageService storageService;

	@Autowired
	private UsuarioRepository repository;

	@Autowired
	private FornecedorService fornecedorService;

	@Autowired
	private EnderecoService enderecoService;

	@Autowired
	private ContatoService contatoService;

	@Autowired
	private ContatoRepository contatoRepository;

	@Autowired
	private ListaService listaService;


	@PostConstruct
	public void initUsers() {

//		List<Usuario> users = Stream.of(
//				new Usuario("Manoel","manoel@gmail.com", "super", encoder().encode("admin"), Papel.SUPER),
//				new Usuario("João","joao@gmail.com", "user", encoder().encode("user1"), Papel.USUARIO),
//				new Usuario("Maria","maria@gmail.com", "admin", encoder().encode("user2"), Papel.ADMINISTRADOR)
//		).collect(Collectors.toList());
//
//		repository.saveAll(users);

//		Endereco endereco = new Endereco(
//				" Rua Tereza Bezerra Salustino",
//				"1901",
//				"por trás do hospital HC",
//				"Lagoa Nova",
//				"Natal",
//				"RN");
//
//		Contato contato = new Contato(
//						"fulanodetal@gmail.com",
//						"Diretor da empresa",
//						TipoContato.EMAIL);
//
//		Fornecedor fornecedor = new Fornecedor(
//				"FTP Informatica e Sistemas",
//				"1232567891",
//				Collections.singleton(contato),
//				endereco
//				);
//
//		fornecedorService.save(fornecedor);
//		contato.setFornecedor(fornecedor);
//		contatoRepository.save(contato);

//		FileInfo fileInfo = new FileInfo("CNH_Digital.pdf", "http://localhost:8080/files/CNH_Digital.pdf");
//		Lista lista = new Lista("Material de papelaria", "MEDIA");
//		listaService.save(lista);
//		lista.setArquivos(Collections.singletonList(fileInfo));
//		//listaService.findByNome(lista.getNome());
//		listaService.save(lista);


	}

	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	public static void main(String[] args) {
		SpringApplication.run(CentralLogiqueApplication.class, args);
	}

//	@Override
//	public void run(String... arg) throws Exception {
////    storageService.deleteAll();
//		storageService.init();
//	}

}
