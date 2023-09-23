package centrallogique.api.service;

import centrallogique.api.model.Contato;
import centrallogique.api.repository.ContatoRepository;
import org.springframework.stereotype.Service;


@Service
public class ContatoService {
    private final ContatoRepository repository;

    public ContatoService(ContatoRepository repository) {
        this.repository = repository;
    }


    public Contato save(Contato contato) {
        return repository.save(contato);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
