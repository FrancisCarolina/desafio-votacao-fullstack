package vot.sicr.api.votos;

import vot.sicr.api.pauta.Pauta;

public record DadosListagemVotos(Long id, String voto, Long idAssociado, Long idPauta) {
    public DadosListagemVotos(Votos votos){
        this(votos.getId(), votos.getVoto(), votos.getIdAssociado(), votos.getIdPauta());
    }
}
