package centrallogique.api.service;

import centrallogique.api.model.Categoria;
import centrallogique.api.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {


    private final CategoriaRepository repository;
    @Autowired
    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    public List<Categoria> listAll() {
        return repository.findAll();
    }

    public Categoria save(Categoria categoria) {
        return repository.save(categoria);
    }
    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Categoria findCategoriaById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Boolean existeCategoria(String nome) {
        Optional<Categoria> categoriaEncontrada = (repository.findCategoriaByNome(nome));
        return categoriaEncontrada.isPresent();
    }

    public Optional<Categoria> findById(Long id) {
        return Optional.ofNullable(repository.findCategoriaById(id));
    }
}
