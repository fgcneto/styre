package centrallogique.api.controller;

import centrallogique.api.model.Usuario;
import centrallogique.api.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UsuarioController {

    private UsuarioService usuarioService;

    @Autowired
    public void setUsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public List<Usuario> listar(){
        return usuarioService.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id){
        Usuario userEncontrado = usuarioService.findUsuarioById(id);
        if (userEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(userEncontrado);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Usuario> salvar(@RequestBody @Valid Usuario usuario){
        if (usuarioService.existeUsername(usuario.getUsername())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        Usuario user  = usuarioService.save(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Usuario> editar(@PathVariable Long id, @RequestBody @Valid Usuario user){
        Optional<Usuario> usuario = usuarioService.findById(id);
        if(usuario.isPresent()){
            user.setId(id);
            return ResponseEntity.ok(usuarioService.save(user));
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletar(@PathVariable @Valid Long id){
        Usuario userEncontrado = usuarioService.findUsuarioById(id);
        var responseMsg = new HashMap<>();
        responseMsg.put("mensagem", "O Usuário foi deletado com sucesso");
        if (userEncontrado == null) {
            return ResponseEntity.notFound().build();
        }
        usuarioService.delete(userEncontrado);
        return ResponseEntity.ok().body(responseMsg);
    }

}
