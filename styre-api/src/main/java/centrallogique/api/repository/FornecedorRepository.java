package centrallogique.api.repository;

import centrallogique.api.model.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
    Optional<Fornecedor> findFornecedorByRazaoSocial(String razaoSocial);
    Optional<Fornecedor> findFornecedorByCnpj(String cnpj);
}
