package centrallogique.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "fileinfo")
public class FileInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 250, nullable = false)
    private String name;
    @Column(length = 250, nullable = false)
    private String url;

    public FileInfo(String name, String url) {
        this.name = name;
        this.url = url;
    }
}
