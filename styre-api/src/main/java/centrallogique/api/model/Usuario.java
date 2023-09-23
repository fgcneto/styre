package centrallogique.api.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150, nullable = false)
    private String nome;
    @Column(length = 150, unique = true)
    private String email;
    @Column(length = 150, nullable = false, unique = true)
    private String username;
    @Column(length = 150, nullable = false)
    private String password;

    @Column(columnDefinition = "boolean default false")
    private Boolean bloqueado;

    @Column(length = 150)
    private String papel;

}