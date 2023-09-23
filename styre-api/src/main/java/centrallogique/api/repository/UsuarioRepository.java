package centrallogique.api.repository;

import centrallogique.api.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UsuarioRepository  extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findUsuarioByUsername(String username);
    Optional<Usuario> findUsuarioById(Long id);
}