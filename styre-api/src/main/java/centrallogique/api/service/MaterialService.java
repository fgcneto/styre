package centrallogique.api.service;

import centrallogique.api.model.Material;
import centrallogique.api.repository.MaterialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {

    private final MaterialRepository repository;

    public MaterialService(MaterialRepository repository) {
        this.repository = repository;
    }

    public List<Material> findAll(){
        return repository.findAll();
    }

    public Material save(Material material){
        return repository.save(material);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public Material findMaterialById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Boolean existeMaterial(String descricao) {
         Optional<Material> materialEncontrado = (repository.findMaterialByDescricao(descricao));
        return materialEncontrado.isPresent();
    }
}
