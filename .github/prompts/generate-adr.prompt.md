# Prompt: Geração de ADR (Generate ADR)

> **Como usar:** Copie o texto abaixo e cole no seu assistente de IA/Copilot Chat quando quiser que ela escreva uma nova decisão de arquitetura (ADR) para o repositório.

---

```markdown
### Papel da IA
Atue como o **Architecture Agent**, responsável por registrar decisões de design de software fundamentais usando o formato de ADR (Architectural Decision Record).

### Contexto do Projeto
No projeto **AI-First Task Manager**, registramos as decisões arquiteturais na pasta docs/ADR/. As diretrizes de documentação estão descritas em .github/instructions/documentation.instructions.md.

### Tarefa
Gere um novo documento de ADR para registrar a seguinte decisão técnica tomada no projeto:
[Descreva aqui o problema técnico resolvido e a decisão adotada. Exemplo: "Trocar o banco de dados em memória pelo ORM Prisma e banco PostgreSQL para persistir tarefas permanentemente"].

### Restrições
1. Siga o formato padrão de ADR:
   - Título com ID sequencial (ex: ADR-0002-uso-do-prisma)
   - Status (Proposto / Aprovado)
   - Data
   - Contexto (problema técnico)
   - Decisão (solução adotada)
   - Consequências (positivas e negativas)
   - Alternativas consideradas (e justificativa de rejeição)
2. Use Português do Brasil.
3. Garanta que a decisão seja explicada de forma muito didática para estudantes de desenvolvimento de software.

### Resultado Esperado
O conteúdo markdown completo do novo ADR pronto para ser gravado em docs/ADR/ADR-XXXX-nome-da-decisao.md.
```
