package centrallogique.api.controller;

import centrallogique.api.model.Categoria;
import centrallogique.api.model.Material;
import centrallogique.api.service.CategoriaService;
import centrallogique.api.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/material")
public class MaterialController {

    private MaterialService materialService;

    private CategoriaService categoriaService;
    @Autowired
    public void setCategoriaService(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    public MaterialController() {
    }

    @Autowired
    public void setMaterialService(MaterialService materialService) {
        this.materialService = materialService;
    }

    @GetMapping
    public List<Material> listaAll() {
        return materialService.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Material> getMaterialById(@PathVariable Long id){
        Material materialEncontrado = materialService.findMaterialById(id);
        if (materialEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(materialEncontrado);
    }

    @PostMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Material> salvar(@PathVariable Long id, @RequestBody Material material){
        Categoria categoria = categoriaService.findCategoriaById(id);
        if(materialService.existeMaterial(material.getDescricao())){
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        material.setCategoria(categoria);
        Material materialSalvo = materialService.save(material);
        return ResponseEntity.status(HttpStatus.CREATED).body(materialSalvo);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Material> editar(@PathVariable Long id, @RequestBody @Valid Material material){
        Material novoMaterial = materialService.findMaterialById(id);
        if(novoMaterial != null){
            material.setCategoria(novoMaterial.getCategoria());
            material.setId(id);
            return ResponseEntity.ok(materialService.save(material));
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletar(@PathVariable @Valid Long id){
        Material materialEncontrado = materialService.findMaterialById(id);
        var responseMsg = new HashMap<>();
        responseMsg.put("mensagem", "O Material foi deletado com sucesso");
        if (materialEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        materialService.delete(materialEncontrado.getId());
        return ResponseEntity.ok().body(responseMsg);
    }
}
