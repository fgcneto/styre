package centrallogique.api.controller;

import centrallogique.api.model.Contato;
import centrallogique.api.model.Endereco;
import centrallogique.api.model.Fornecedor;
import centrallogique.api.service.ContatoService;
import centrallogique.api.service.EnderecoService;
import centrallogique.api.service.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

    private final FornecedorService fornecedorService;
    private final EnderecoService enderecoService;

    private final ContatoService contatoService;

    @Autowired
    public FornecedorController(EnderecoService enderecoService, FornecedorService fornecedorService, ContatoService contatoService) {
        this.enderecoService = enderecoService;
        this.fornecedorService = fornecedorService;
        this.contatoService = contatoService;
    }

    @GetMapping
    public List<Fornecedor> listar(){
        return fornecedorService.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Fornecedor> getFornecedorById(@PathVariable Long id){
        Fornecedor fornecedorEncontrado = fornecedorService.findFornecedorById(id);
        if (fornecedorEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(fornecedorEncontrado);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Fornecedor> salvar(@RequestBody @Valid Fornecedor fornecedor){
        if (fornecedorService.existeFornecedor(fornecedor.getRazaoSocial())
                &&
                fornecedorService.existeCnpj(fornecedor.getCnpj())
        ) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        Endereco enderecoSalvo = enderecoService.save(fornecedor.getEndereco());
        fornecedor.setEndereco(enderecoSalvo);

        Fornecedor fornecedorSalvo = fornecedorService.save(fornecedor);
        if(fornecedor.getContatoList() != null) {
            for (Contato contato : fornecedor.getContatoList()) {
                contato.setFornecedor(fornecedor);
                contatoService.save(contato);
            }
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(fornecedorSalvo);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Fornecedor> editar(@PathVariable Long id, @RequestBody @Valid Fornecedor fornecedor){
        Optional<Fornecedor> fornecedorEncontrado = Optional.ofNullable(fornecedorService.findFornecedorById(id));
        if(fornecedorEncontrado.isPresent()){
            fornecedor.setId(id);
            return ResponseEntity.ok(fornecedorService.save(fornecedor));
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletar(@PathVariable @Valid Long id){
        Fornecedor fornecedorEncontrado = fornecedorService.findFornecedorById(id);
        var responseMsg = new HashMap<>();
        responseMsg.put("mensagem", "O Fornecedor foi deletado com sucesso");
        if (fornecedorEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        fornecedorService.delete(fornecedorEncontrado.getId());
        return ResponseEntity.ok().body(responseMsg);
    }
}
