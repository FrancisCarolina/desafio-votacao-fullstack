package vot.sicr.api.pauta;


import vot.sicr.api.associado.Associado;

public record DadosListagemPauta(Long id, String iniciadoEm, String duracao, String pergunta, String codigo, Long id_associado) {

    public DadosListagemPauta(Pauta pauta){
        this(pauta.getId(),pauta.getIniciadoEm(), pauta.getDuracao(), pauta.getPergunta(), pauta.getCodigo(), pauta.getIdAssociado());
    }
}
