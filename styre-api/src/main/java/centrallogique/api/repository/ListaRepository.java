package centrallogique.api.repository;

import centrallogique.api.model.Lista;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ListaRepository extends JpaRepository<Lista, Long> {
    @Override
    Optional<Lista> findById(Long Long);

    Optional<Lista> findByNome(String nome);
}
