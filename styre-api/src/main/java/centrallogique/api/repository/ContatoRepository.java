package centrallogique.api.repository;

import centrallogique.api.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

    @Override
    Optional<Contato> findById(Long Long);

}
