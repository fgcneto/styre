package centrallogique.api.controller;

import centrallogique.api.model.Categoria;
import centrallogique.api.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    private final CategoriaService categoriaService;

    @Autowired
    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @GetMapping
    public List<Categoria> listaAll() {
        return categoriaService.listAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Categoria> getCategoriaById(@PathVariable Long id){
        Categoria categoriaEncontrada = categoriaService.findCategoriaById(id);
        if (categoriaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(categoriaEncontrada);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Categoria> salvar(@RequestBody @Valid Categoria categoria){
        if (categoriaService.existeCategoria(categoria.getNome())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } else {
            categoriaService.save(categoria);
            return ResponseEntity.status(HttpStatus.CREATED).body(categoria);
        }
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Categoria> editar(@PathVariable Long id, @RequestBody @Valid Categoria categoria){
        Optional<Categoria> novaCategoria = categoriaService.findById(id);
        if(novaCategoria.isPresent()){
            categoria.setId(id);
            return ResponseEntity.ok(categoriaService.save(categoria));
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletar(@PathVariable @Valid Long id){
        Categoria categoriaEncontrada = categoriaService.findCategoriaById(id);
        var responseMsg = new HashMap<>();
        responseMsg.put("mensagem", "A Categoria foi deletada com sucesso");
        if (categoriaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        categoriaService.delete(categoriaEncontrada.getId());
        return ResponseEntity.ok().body(responseMsg);
    }
}
