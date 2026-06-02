# Product Requirements Document (PRD) — AI-First Task Manager

> **O que é um PRD?**
> Um *Product Requirements Document* (Documento de Requisitos do Produto) é um guia que define o que está sendo construído, para quem, por que e quais são os critérios de sucesso do produto. No desenvolvimento tradicional, ele serve para alinhar o time de produto e engenharia. No **AI-First Development**, o PRD é também um **artefato de contexto essencial para a IA**. Ele serve como a "fonte única da verdade" sobre o produto, garantindo que o assistente de IA (como o GitHub Copilot) implemente exatamente o que o negócio precisa, sem inventar regras ou assumir comportamentos incorretos.

---

## 1. Visão Geral do Produto
O **AI-First Task Manager** é um gerenciador de tarefas minimalista e focado em produtividade pessoal, projetado para ajudar desenvolvedores e profissionais a organizarem suas atividades diárias. Ele prioriza a simplicidade e a rapidez no gerenciamento das obrigações diárias.

### O Problema que Resolve
Muitas ferramentas de gerenciamento de tarefas são excessivamente complexas, lentas e cheias de funcionalidades desnecessárias que distraem o usuário. Os usuários precisam de uma solução rápida e direta via API (e futuramente interface gráfica) para catalogar o que precisam fazer e acompanhar o progresso das tarefas sem atrito.

### Público-alvo
- Desenvolvedores de software que preferem interagir com APIs ou CLI.
- Estudantes de desenvolvimento de software que precisam de um projeto didático realista para estudo.
- Profissionais técnicos focados em produtividade ágil.

---

## 2. Objetivos do Produto
- **Simplicidade:** Permitir a criação e listagem de tarefas em milissegundos.
- **Rastreabilidade:** Facilitar o entendimento do progresso diário através de status claros.
- **Extensibilidade:** Servir como base sólida para extensões futuras (como adicionar prioridades, categorias, usuários ou datas de entrega).

---

## 3. Funcionalidades do MVP (Mínimo Produto Viável)
O MVP deve conter as seguintes funcionalidades expostas via API REST:

1.  **Criação de Tarefas:**
    - O usuário pode criar uma tarefa fornecendo apenas o `title` (título) e uma `description` (descrição) opcional.
2.  **Listagem de Tarefas:**
    - O usuário pode listar todas as tarefas cadastradas.
    - Opcionalmente, pode filtrar tarefas por status (pendentes ou concluídas).
3.  **Atualização de Detalhes:**
    - O usuário pode editar o `title` e a `description` de uma tarefa existente.
4.  **Conclusão de Tarefas:**
    - O usuário pode marcar uma tarefa como concluída (`completed`).

---

## 4. Regras de Negócio
-   **Regra 1 (Identificação única):** Toda tarefa deve possuir um identificador único universal (UUID v4).
-   **Regra 2 (Validação de Título):** O título da tarefa é obrigatório, não pode ser vazio e deve ter no mínimo 3 caracteres e no máximo 100 caracteres.
-   **Regra 3 (Status Inicial):** Toda nova tarefa criada deve iniciar obrigatoriamente com o status `pending` (pendente).
-   **Regra 4 (Imutabilidade de Tarefa Concluída):** Uma tarefa marcada como concluída (`completed`) não pode ter seu título ou descrição editados, a menos que seja explicitamente reaberta (o que está fora do escopo do MVP).
-   **Regra 5 (Datas de Auditoria):** Cada tarefa deve registrar automaticamente a data/hora de criação (`createdAt`) e a data/hora da última atualização (`updatedAt`). Quando concluída, deve registrar a data/hora de conclusão (`completedAt`).

---

## 5. Critérios de Aceitação

### Criação de Tarefas (`POST /tasks`)
*   **Dado** que um payload válido com `title` e `description` é enviado.
*   **Quando** a requisição for processada.
*   **Então** o sistema deve salvar a tarefa, gerar o UUID, definir o status como `pending`, definir `createdAt` e `updatedAt` para a data atual, e retornar a tarefa criada com o status HTTP `201 Created`.
*   **Dado** um payload sem `title` ou com menos de 3 caracteres.
*   **Quando** a requisição for processada.
*   **Então** o sistema deve retornar um erro de validação com o status HTTP `400 Bad Request`.

### Conclusão de Tarefa (`PATCH /tasks/:id/complete`)
*   **Dado** que um ID de tarefa existente e ativo é fornecido.
*   **Quando** a requisição for executada.
*   **Então** a tarefa deve ser alterada para `completed`, a data `completedAt` deve ser preenchida com a hora do servidor, e retornar status HTTP `200 OK` com o objeto atualizado.
*   **Dado** um ID de tarefa que não existe.
*   **Quando** a requisição for executada.
*   **Então** o sistema deve retornar status HTTP `404 Not Found`.

---

## 6. Fora de Escopo (Out of Scope)
As seguintes funcionalidades **NÃO** fazem parte do MVP e não devem ser implementadas neste momento:
- Autenticação e autorização de usuários (multi-tenant).
- Banco de dados relacional persistente (Postgres, MySQL) ou NoSQL externo (MongoDB).
- Categorias ou tags para tarefas.
- Priorização de tarefas (*Nota: este item será o desafio prático do aluno no tutorial*).
- Interface web (Frontend).

---

## 7. Métricas de Sucesso
- 100% de cobertura de testes unitários nas regras de negócio da camada de domínio.
- Tempo de resposta médio da API abaixo de 50ms (execução local).
- Zero acoplamento com banco de dados externo no MVP para facilidade de execução rápida.

---

## 8. Riscos e Dependências
- **Risco:** Armazenamento em memória significa que os dados serão perdidos a cada reinicialização da aplicação.
  - *Mitigação:* Deixar claro no README e na documentação arquitetural que o banco de dados é volátil (em memória) apenas para fins educacionais e agilidade de execução.
- **Risco:** Falta de persistência impede testes manuais duradouros.
  - *Mitigação:* Criar uma boa suíte de testes unitários e de integração automatizados para garantir que o comportamento persistente seja simulado de forma consistente.

---

## 9. Perguntas em Aberto
- *Deveríamos permitir a exclusão lógica ou física de tarefas no futuro?*
- *Como gerenciar a paginação caso o número de tarefas na memória cresça demais?*
