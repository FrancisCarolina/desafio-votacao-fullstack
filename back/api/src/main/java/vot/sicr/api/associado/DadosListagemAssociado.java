package vot.sicr.api.associado;

public record DadosListagemAssociado(Long id, String cpf) {

    public DadosListagemAssociado(Associado associado){
        this(associado.getId(),associado.getCpf());
    }
}
