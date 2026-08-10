# 🚀 Curso de FastAPI_ZERO

Repositório desenvolvido durante o curso de **FastAPI**, com foco na construção de APIs modernas utilizando Python e boas práticas de desenvolvimento.

Ao longo do projeto, novas ferramentas e bibliotecas são incorporadas gradualmente, permitindo compreender não apenas o funcionamento do FastAPI, mas também práticas importantes para **qualidade de código, testes e gerenciamento de dependências**.

---

## 🛠️ Tecnologias e ferramentas utilizadas

Até o momento, o projeto utiliza:

| Ferramenta    | Finalidade                                          |
| ------------- | --------------------------------------------------- |
| 🐍 **Python** | Linguagem utilizada no desenvolvimento da aplicação |
| ⚡ **FastAPI** | Framework para criação de APIs com Python           |
| 📦 **Poetry** | Gerenciamento de dependências e ambiente do projeto |
| 🧹 **Ruff**   | Análise, linting e formatação do código Python      |
| 🧪 **Pytest** | Criação e execução de testes automatizados          |

---

# 📦 Poetry

O **Poetry** é uma ferramenta utilizada para **gerenciar dependências, ambientes virtuais e configurações de projetos Python**.

Ele centraliza as informações do projeto no arquivo:

```text
pyproject.toml
```

Com ele é possível instalar, adicionar e remover dependências de maneira organizada.

### Principais responsabilidades

* Gerenciar dependências do projeto;
* Criar e gerenciar ambientes virtuais;
* Controlar versões de pacotes;
* Facilitar a instalação do projeto em outros ambientes;
* Centralizar configurações no `pyproject.toml`.

### Comandos utilizados

Instalar as dependências:

```bash
poetry install
```

Adicionar uma nova dependência:

```bash
poetry add fastapi
```

Adicionar uma dependência de desenvolvimento:

```bash
poetry add --group dev pytest
```

Executar comandos dentro do ambiente do Poetry:

```bash
poetry run <comando>
```

Por exemplo:

```bash
poetry run pytest
```

---

# 🧹 Ruff

O **Ruff** é uma ferramenta extremamente rápida para análise e manutenção de código Python.

Ele pode ser utilizado para identificar problemas no código, aplicar correções automáticas e realizar formatação.

### Para que serve?

O Ruff ajuda a:

* Identificar erros e problemas no código;
* Detectar padrões considerados inadequados;
* Manter um padrão de qualidade;
* Formatar o código automaticamente;
* Evitar problemas simples antes de executar a aplicação.

### Verificar o código

```bash
ruff check .
```

### Corrigir problemas automaticamente

```bash
ruff check . --fix
```

### Formatar o código

```bash
ruff format .
```

Dessa forma, o Ruff contribui para manter o código do projeto mais **limpo, consistente e padronizado**.

---

# 🧪 Pytest

O **Pytest** é um framework utilizado para criar e executar **testes automatizados em Python**.

No projeto, ele será utilizado para verificar se as funcionalidades desenvolvidas estão funcionando conforme o esperado.

### Para que serve?

Com o Pytest podemos:

* Criar testes automatizados;
* Validar funcionalidades;
* Encontrar erros rapidamente;
* Evitar regressões;
* Aumentar a confiabilidade da aplicação.

Um teste simples pode ser escrito assim:

```python
def soma(a, b):
    return a + b


def test_soma():
    assert soma(2, 3) == 5
```

Para executar os testes:

```bash
pytest
```

Ou, utilizando o ambiente gerenciado pelo Poetry:

```bash
poetry run pytest
```

Se tudo estiver correto, o Pytest apresentará o resultado dos testes executados.

---

# ⚡ FastAPI

O **FastAPI** é o framework utilizado para construir a API deste projeto.

Ele permite desenvolver APIs utilizando Python de maneira rápida, organizada e com suporte a recursos modernos, como:

* Rotas;
* Validação de dados;
* Tipagem;
* Documentação automática;
* Operações assíncronas;
* Integração com ferramentas de testes.

Um exemplo básico de uma aplicação FastAPI:

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Olá, FastAPI!"}
```

Para executar a aplicação:

```bash
fastapi dev app.py
```

A documentação interativa da API pode ser acessada através do Swagger UI:

```text
/docs
```

---

# 🔄 Como as ferramentas trabalham juntas

Uma das propostas do curso é entender que o desenvolvimento de uma API não depende apenas do framework.

As ferramentas possuem responsabilidades diferentes:

```text
                    Projeto FastAPI
                          │
          ┌───────────────┼────────────────┐
          │               │                │
       Poetry           Ruff            Pytest
          │               │                │
    Dependências      Qualidade          Testes
    e ambiente       do código        automatizados
          │               │                │
          └───────────────┼────────────────┘
                          │
                       FastAPI
                          │
                          ▼
                    API em Python
```

### Resumindo

**Poetry** → gerencia o projeto e suas dependências.

**Ruff** → ajuda a manter a qualidade e padronização do código.

**Pytest** → verifica se o código está funcionando corretamente.

**FastAPI** → permite construir a API.

---

# 📁 Estrutura do projeto

A estrutura será ampliada conforme novos conceitos forem apresentados durante o curso.

Uma estrutura inicial pode ser organizada da seguinte maneira:

```text
.
├── app/
│   ├── __init__.py
│   └── main.py
│
├── tests/
│   └── ...
│
├── pyproject.toml
├── poetry.lock
└── README.md
```

### Arquivos importantes

**`pyproject.toml`**

Arquivo utilizado pelo Poetry para armazenar informações do projeto, dependências e configurações de ferramentas.

**`poetry.lock`**

Registra as versões específicas das dependências utilizadas no projeto.

**`README.md`**

Documentação do projeto e registro dos conceitos estudados durante o curso.

**`tests/`**

Diretório destinado aos testes automatizados utilizando Pytest.

---

# 📚 Evolução do projeto

As ferramentas serão adicionadas gradualmente ao longo do curso.

* [x] Python
* [x] FastAPI
* [x] Poetry
* [x] Ruff
* [x] Pytest
* [ ] Novas ferramentas e conceitos

> 🚧 **Projeto em desenvolvimento**
>
> Este README será atualizado conforme novos conteúdos, ferramentas e boas práticas forem introduzidos no curso.

---

## 🎯 Objetivo

O objetivo deste projeto é acompanhar, na prática, a construção de uma API utilizando **FastAPI**, incorporando gradualmente ferramentas que fazem parte de um fluxo moderno de desenvolvimento Python.

Além de aprender a criar endpoints, o projeto busca desenvolver conhecimentos relacionados a:

* Organização de projetos Python;
* Gerenciamento de dependências;
* Qualidade e padronização de código;
* Testes automatizados;
* Boas práticas de desenvolvimento;
* Construção e documentação de APIs.
