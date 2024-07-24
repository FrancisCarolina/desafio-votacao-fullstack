package vot.sicr.api.pauta;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DadosCadastroPauta(@NotBlank String iniciadoEm,@NotBlank String duracao,@NotBlank String pergunta,@NotBlank String codigo,@NotNull Long id_associado) {
}
