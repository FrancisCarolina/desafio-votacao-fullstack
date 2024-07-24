package vot.sicr.api.associado;

import jakarta.validation.constraints.NotBlank;

public record DadosCadastroAssociado(@NotBlank String cpf) {
}
