package centrallogique.api.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "enderecos")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150, nullable = false)
    private String logradouro;

    @Column(length = 10, nullable = false)
    private String numero;

    @Column(length = 150)
    private String complemento;

    @Column(length = 150, nullable = false)
    private String bairro;

    @Column(length = 150, nullable = false)
    private String cidade;

    @Column(length = 150, nullable = false)
    private String estado;

}
