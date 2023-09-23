package centrallogique.api.service;

import centrallogique.api.model.Fornecedor;
import centrallogique.api.model.Lista;
import centrallogique.api.repository.ListaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ListaService {

    private final ListaRepository listaRepository;

    public ListaService(ListaRepository listaRepository) {
        this.listaRepository = listaRepository;
    }

    public List<Lista> findAll() {return listaRepository.findAll();}

    public Lista save(Lista lista) { return listaRepository.save(lista);}

    public void delete(Long id) {listaRepository.deleteById(id);}

    public Lista findById(Long id) { return listaRepository.findById(id).orElse(null);}

    public Lista findByNome(String nome) { return listaRepository.findByNome(nome).orElse(null);}

    public Boolean existeLista(String nome) {
        Optional<Lista> listaEncontrada = (listaRepository.findByNome(nome));
        return listaEncontrada.isPresent();
    }
}
