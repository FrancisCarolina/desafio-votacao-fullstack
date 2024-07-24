package vot.sicr.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vot.sicr.api.pauta.DadosCadastroPauta;
import vot.sicr.api.pauta.DadosListagemPauta;
import vot.sicr.api.pauta.Pauta;
import vot.sicr.api.votos.DadosCadastroVotos;
import vot.sicr.api.votos.DadosListagemVotos;
import vot.sicr.api.votos.Votos;
import vot.sicr.api.votos.VotosRepository;

import java.util.List;

@RestController
@RequestMapping("/votos")
@CrossOrigin(origins = "http://localhost:3000")
public class VotosController {

    @Autowired
    private VotosRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity<DadosListagemVotos> cadastrar(@RequestBody @Valid DadosCadastroVotos dados){
        Votos votos = repository.save(new Votos(dados));
        DadosListagemVotos dadosListagem = new DadosListagemVotos(votos);
        return new ResponseEntity<>(dadosListagem, HttpStatus.CREATED);
    }

    @GetMapping
    public List<DadosListagemVotos> listar(@RequestParam(required = false) Long idPauta,
                                           @RequestParam(required = false) Long idAssociado){
        if (idPauta != null && idAssociado != null) {
            return repository.findByIdPautaAndIdAssociado(idPauta, idAssociado).stream()
                    .map(DadosListagemVotos::new).toList();
        } else if (idPauta != null) {
            return repository.findByIdPauta(idPauta).stream()
                    .map(DadosListagemVotos::new).toList();
        } else if (idAssociado != null) {
            return repository.findByIdAssociado(idAssociado).stream()
                    .map(DadosListagemVotos::new).toList();
        } else {
            return repository.findAll().stream().map(DadosListagemVotos::new).toList();
        }
    }}
