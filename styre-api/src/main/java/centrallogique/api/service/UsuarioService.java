package centrallogique.api.service;

import centrallogique.api.model.Usuario;
import centrallogique.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
@Service
public class UsuarioService implements UserDetailsService {

    final
    UsuarioRepository repository;

    @Autowired
    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> optional = repository.findUsuarioByUsername(username);

        if(optional.isPresent()) {
            return new org.springframework.security.core.userdetails.User(
                    optional.get().getUsername(),
                    optional.get().getPassword(),
                    Collections.singletonList(new SimpleGrantedAuthority(optional.get().getPapel()))
            );
        }

        throw new UsernameNotFoundException("Usuário não encontrado");

    }

    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    public List<Usuario> findAll(){
        return repository.findAll();
    }

    public Usuario save(Usuario usuario){
        usuario.setBloqueado(false);
        usuario.setPassword(encoder().encode(usuario.getPassword()));
        return repository.save(usuario);
    }

    public void delete(Usuario usuario){
        repository.delete(usuario);
    }

    public Boolean existeUsername(String username) {
        Optional<Usuario> userEncontrado = repository.findUsuarioByUsername(username);
        return userEncontrado.isPresent();
    }

    public Usuario findUsuarioById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Optional<Usuario> findById(Long id) {
        return repository.findUsuarioById(id);
    }
}
