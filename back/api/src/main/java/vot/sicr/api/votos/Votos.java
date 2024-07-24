package vot.sicr.api.votos;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import vot.sicr.api.pauta.DadosCadastroPauta;

@Table(name = "votos")
@Entity(name = "Votos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Votos {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String voto;
    private Long idPauta;
    private Long idAssociado;

    public Votos(DadosCadastroVotos dados) {
        this.voto = dados.voto();
        this.idAssociado = dados.id_associado();
        this.idPauta = dados.id_pauta();
    }

}
