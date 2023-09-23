package centrallogique.api.service;

import centrallogique.api.model.Endereco;
import centrallogique.api.repository.EnderecoRepository;
import org.springframework.stereotype.Service;

@Service
public class EnderecoService {

    private final EnderecoRepository repository;

    public EnderecoService(EnderecoRepository repository) {
        this.repository = repository;
    }

    public Endereco save(Endereco endereco) { return repository.save(endereco); }

    public void delete(Long id) {
        repository.deleteById(id);
    }


}
