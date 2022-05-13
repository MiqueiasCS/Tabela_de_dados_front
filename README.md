## Tabela

Projeto criado para pôr em prática meus conhecimentos. Ao logar é mostrada uma tabela com uma lista de itens carregada de uma [API](https://github.com/MiqueiasCS/tabela_de_dados_back). É possível buscar os itens pelo nome no campo de pesquisa e filtrar os itens por cvss, data de publicação e fixed ao clicar no cabeçalho dos itens.

## Tecnologias

- [x] Linguagem de programação: TypeScript
- [x] ReactJs

## Arquitetura da aplicação
[Link](https://drive.google.com/file/d/1UqiLDgUng8MN3o7697y6tdJLU9h-YsJk/view?usp=sharing)

### 🎲 Rodando o Front End

```bash

# Clone este repositório usando o terminal com um dos comandos abaixo:
$ git clone <git@github.com:MiqueiasCS/Tabela_de_dados_front.git>


# entre na pasta do projeto
$ cd Tabela_de_dados_front

# instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento.
$ yarn start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

```

## Requisitos
Essa aplicação necessita que o seguinte repositório esteja rodando em desenvolvimento [link](https://github.com/MiqueiasCS/tabela_de_dados_back)

## Paginas

- "/"
  - página de login
- "/table"
  - página da tabela. Para ter acesso é necesário estar logado.
- "/dash"
  - página individual de um hostname. (em construção)

## Dados
Use os seguintes dados para o login:
- email : testador@mail.com
- password: 123asd
