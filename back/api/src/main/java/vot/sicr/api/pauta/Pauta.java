package vot.sicr.api.pauta;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import vot.sicr.api.associado.Associado;

@Table(name = "pauta")
@Entity(name = "Pauta")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Pauta {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String iniciadoEm;
    private String duracao;
    private String pergunta;
    private String codigo;
    private Long idAssociado;

    public Pauta(DadosCadastroPauta dados) {
        this.iniciadoEm = dados.iniciadoEm();
        this.duracao = dados.duracao();
        this.pergunta = dados.pergunta();
        this.codigo = dados.codigo();
        this.idAssociado = dados.id_associado();
    }
}
