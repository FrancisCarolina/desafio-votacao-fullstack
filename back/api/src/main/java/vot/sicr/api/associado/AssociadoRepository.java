package vot.sicr.api.associado;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AssociadoRepository extends JpaRepository<Associado, Long> {
    Optional<Associado> findByCpf(String cpf);
}
