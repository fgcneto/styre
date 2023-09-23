package centrallogique.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "listas")
public class Lista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150, nullable = false)
    private String nome;

    @Column(length = 10, nullable = false)
    private String prioridade;

    @ManyToMany
    @JoinTable(name = "materiais_listas")
    private List<Material> materialList;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name = "lista_id")
    private List<FileInfo> arquivos;


    public Lista(String nome, String prioridade) {
        this.nome = nome;
        this.prioridade = prioridade;
    }
}
