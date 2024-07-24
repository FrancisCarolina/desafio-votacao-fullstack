package vot.sicr.api.associado;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "associado")
@Entity(name = "Associado")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Associado {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cpf;

    public Associado(DadosCadastroAssociado dados) {
        this.cpf = dados.cpf();
    }
}
