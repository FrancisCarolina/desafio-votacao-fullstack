package vot.sicr.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import vot.sicr.api.associado.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/associado")
@CrossOrigin(origins = "http://localhost:3000")
public class AssociadoController {

    @Autowired
    private AssociadoRepository repository;

    @PostMapping
    @Transactional
    public  ResponseEntity<DadosListagemAssociado> cadastrar(@RequestBody @Valid DadosCadastroAssociado dados){
        Associado associado = repository.save(new Associado(dados));
        DadosListagemAssociado dadosListagem = new DadosListagemAssociado(associado);
        return new ResponseEntity<>(dadosListagem, HttpStatus.CREATED);
    }

    @GetMapping
    public List<DadosListagemAssociado> listar(@RequestParam(required = false) String cpf){
        if (cpf != null) {
            Optional<Associado> associado = repository.findByCpf(cpf);
            if (associado.isPresent()) {
                return List.of(new DadosListagemAssociado(associado.get()));
            } else {
                throw new AssociadoNotFoundException("Associado com CPF " + cpf + " não encontrado.");
            }
        } else {
            return repository.findAll().stream().map(DadosListagemAssociado::new).toList();
        }
    }


}
