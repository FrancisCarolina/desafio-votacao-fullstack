create table associado(

    id bigint not null auto_increment,
    cpf varchar(100) not null,

    primary key(id)

);

CREATE TABLE pauta (
       id BIGINT NOT NULL AUTO_INCREMENT,
       iniciado_em VARCHAR(100) NOT NULL,
       duracao VARCHAR(100) NULL,
       pergunta VARCHAR(255) NOT NULL,
       codigo VARCHAR(20) NOT NULL,
       id_associado BIGINT NOT NULL,
       PRIMARY KEY (id)
);

create table votos(

      id bigint not null auto_increment,
      voto varchar(100) not null,
      id_pauta bigint not null,
      id_associado bigint not null,

      primary key(id)

);
