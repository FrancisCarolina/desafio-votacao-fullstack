package vot.sicr.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vot.sicr.api.associado.Associado;
import vot.sicr.api.associado.AssociadoRepository;
import vot.sicr.api.associado.DadosCadastroAssociado;
import vot.sicr.api.associado.DadosListagemAssociado;
import vot.sicr.api.pauta.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pauta")
@CrossOrigin(origins = "http://localhost:3000")
public class PautaController {

    @Autowired
    private PautaRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity<DadosListagemPauta> cadastrar(@RequestBody @Valid DadosCadastroPauta dados){
        Pauta pauta = repository.save(new Pauta(dados));
        DadosListagemPauta dadosListagem = new DadosListagemPauta(pauta);
        return new ResponseEntity<>(dadosListagem, HttpStatus.CREATED);
    }

    @GetMapping
    public List<DadosListagemPauta> listar(@RequestParam(required = false) Long idAssociado,
                                           @RequestParam(required = false) String codigo, @RequestParam(required = false) Long id){
        if (idAssociado != null) {
                return repository.findByIdAssociado(idAssociado).stream().map(DadosListagemPauta::new).toList();
        } else if (codigo != null) {
            Optional<Pauta> pauta = repository.findByCodigo(codigo);
            if (pauta.isPresent()) {
                return List.of(new DadosListagemPauta(pauta.get()));
            } else {
                throw new PautaNotFoundException("Pauta com código " + codigo + " não encontrada.");
            }
        }else if(id != null){
            Optional<Pauta> pauta = repository.findById(id);
            if (pauta.isPresent()) {
                return List.of(new DadosListagemPauta(pauta.get()));
            } else {
                throw new PautaNotFoundException("Pauta com o id " + id + " não encontrada.");
            }
        }else {
            return repository.findAll().stream().map(DadosListagemPauta::new).toList();
        }
    }
}
