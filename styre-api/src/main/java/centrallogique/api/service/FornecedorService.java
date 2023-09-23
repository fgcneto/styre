package centrallogique.api.service;

import centrallogique.api.model.Fornecedor;
import centrallogique.api.repository.FornecedorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FornecedorService {

    private final FornecedorRepository repository;

    public FornecedorService(FornecedorRepository repository) {
        this.repository = repository;
    }

    public List<Fornecedor> findAll() {return repository.findAll();}

    public Fornecedor save(Fornecedor fornecedor) { return repository.save(fornecedor);}

    public void delete(Long id) {repository.deleteById(id);}

    public Fornecedor findFornecedorById(Long id) { return repository.findById(id).orElse(null);}

    public Boolean existeFornecedor(String razaoSocial) {
        Optional<Fornecedor> fornecedorEncontrado = (repository.findFornecedorByRazaoSocial(razaoSocial));
        return fornecedorEncontrado.isPresent();
    }

    public Boolean existeCnpj(String cnpj) {
        Optional<Fornecedor> fornecedorEncontrado = (repository.findFornecedorByCnpj(cnpj));
        return fornecedorEncontrado.isPresent();
    }
}
