package centrallogique.api.repository;

import centrallogique.api.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MaterialRepository extends JpaRepository<Material, Long> {

    Optional<Material> findMaterialByDescricao(String descricao);
}
