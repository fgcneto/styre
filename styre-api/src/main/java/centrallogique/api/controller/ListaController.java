package centrallogique.api.controller;

import centrallogique.api.model.Fornecedor;
import centrallogique.api.model.Lista;
import centrallogique.api.service.ListaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lista")
public class ListaController {

    private ListaService listaService;

    public ListaController(ListaService listaService) {
        this.listaService = listaService;
    }

    @GetMapping
    public List<Lista> listar(){
        return listaService.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Lista> getListaById(@PathVariable Long id){
        Lista listaEncontrada = listaService.findById(id);
        if (listaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(listaEncontrada);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Lista> salvar(@RequestBody @Valid Lista lista) {
        if (listaService.existeLista(lista.getNome())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        Lista listaSalva = listaService.save(lista);
        return ResponseEntity.status(HttpStatus.CREATED).body(listaSalva);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Lista> editar(@PathVariable Long id, @RequestBody @Valid Lista lista){
        Optional<Lista> listaEncontrada = Optional.ofNullable(listaService.findById(id));
        if(listaEncontrada.isPresent()){
            lista.setId(id);
            return ResponseEntity.ok(listaService.save(lista));
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletar(@PathVariable @Valid Long id){
        Lista listaEncontrada = listaService.findById(id);
        var responseMsg = new HashMap<>();
        responseMsg.put("mensagem", "A Lista foi deletada com sucesso");
        if (listaEncontrada == null) {
            return ResponseEntity.notFound().build();
        }
        listaService.delete(listaEncontrada.getId());
        return ResponseEntity.ok().body(responseMsg);
    }
}
