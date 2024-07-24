package vot.sicr.api.pauta;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PautaRepository extends JpaRepository<Pauta, Long> {
    List<Pauta> findByIdAssociado(Long idAssociado);
    Optional<Pauta> findByCodigo(String codigo);
}
