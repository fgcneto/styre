package centrallogique.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.LinkedHashSet;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "fornecedores")
public class Fornecedor implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150, nullable = false)
    private String razaoSocial;

    @Column(length = 14, unique = true)
    private String cnpj;

    @Transient
    private Collection<Contato> contatoList = new LinkedHashSet<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;

}
