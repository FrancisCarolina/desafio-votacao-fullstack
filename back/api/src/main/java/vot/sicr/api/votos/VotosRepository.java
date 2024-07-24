package vot.sicr.api.votos;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VotosRepository extends JpaRepository<Votos, Long> {
    List<Votos> findByIdPauta(Long idPauta);
    List<Votos> findByIdAssociado(Long idAssociado);
    List<Votos> findByIdPautaAndIdAssociado(Long idPauta, Long idAssociado);
}
