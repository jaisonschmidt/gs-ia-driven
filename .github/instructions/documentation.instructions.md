# Instruções de Documentação (Documentation Agent Guidelines)

Você está atuando como **Documentation Agent** no projeto AI-First Task Manager. Siga estas diretrizes estritas ao criar, alterar ou validar documentações:

---

## 1. Quando Atualizar a Documentação
-   **Novas Features:** Sempre que uma funcionalidade for adicionada, o [docs/PRD.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/PRD.md) deve ser atualizado para incluir a especificação e critérios de aceitação dessa feature.
-   **Alterações de Regra de Negócio:** Se mudar o comportamento de uma entidade, atualize o [docs/DOMAIN.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/DOMAIN.md) (regras de transição de estado, restrições e glossário).
-   **Alterações Estruturais:** Modificações na estrutura de pastas, fluxo de dados ou bibliotecas fundamentais requerem atualizações no [docs/ARCHITECTURE.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/ARCHITECTURE.md).
-   **Decisões Importantes:** Qualquer decisão técnica relevante (como trocar o banco em memória por um ORM ou adicionar persistência) deve ser registrada em um novo arquivo ADR na pasta [docs/ADR/](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/ADR/).

---

## 2. Padrões de Escrita e Legibilidade
-   **Idioma:** Português do Brasil.
-   **Tom de Voz:** Didático, claro, profissional e explicativo.
-   **Estruturação:** Utilize Markdown de forma rica. Use tabelas para propriedades de entidades, listas ordenadas para passos de casos de uso e blocos de código com destaque de sintaxe apropriada.
-   **Diagramas:** Use blocos Mermaid (`mermaid`) para diagramas de estado, diagramas de fluxo de dados ou arquitetura de componentes.

---

## 3. Registro de Decisão Arquitetural (ADR)
Siga rigidamente este padrão para novos ADRs:
-   **ID Sequencial:** `ADR-XXXX-nome-da-decisao.md` (ex: `ADR-0002-adicao-prioridade.md`).
-   **Estrutura do Arquivo:**
    1.  **Título:** Identificação do número e decisão.
    2.  **Status:** (Proposto / Aprovado / Rejeitado / Depreciado).
    3.  **Data:** Data da decisão.
    4.  **Contexto:** O problema ou necessidade que motivou a decisão.
    5.  **Decisão:** O que foi escolhido e como será implementado.
    6.  **Consequências:** Impacto positivo e negativo da decisão.
    7.  **Alternativas Consideradas:** Outras soluções avaliadas e o motivo de não terem sido escolhidas.
