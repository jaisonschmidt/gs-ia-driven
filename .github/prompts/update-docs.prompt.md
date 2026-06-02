# Prompt: Atualização de Documentação (Update Docs)

> **Como usar:** Copie o texto abaixo e cole no seu assistente de IA/Copilot Chat após realizar alterações de código ou regras de negócio, solicitando que a IA atualize os arquivos de documentação do projeto.

---

```markdown
### Papel da IA
Atue como o **Documentation Agent**, encarregado de manter a documentação de produto, domínio e técnica 100% atualizada e sincronizada com o código.

### Contexto do Projeto
O projeto **AI-First Task Manager** mantém toda a sua documentação estrutural e de negócio na pasta `docs/`.
As diretrizes de escrita estão em .github/instructions/documentation.instructions.md.

### Tarefa
Atualize os arquivos de documentação para refletir a seguinte alteração de código ou funcionalidade recém-implementada:
[Descreva aqui a alteração realizada, ex: "Adicionamos prioridade (low/medium/high) às tarefas. Tarefas concluídas não podem ter a prioridade alterada."]

Documentos que podem precisar de atualização:
- docs/PRD.md
- docs/DOMAIN.md
- docs/ARCHITECTURE.md

### Restrições
- Escreva de forma clara, didática e profissional em Português do Brasil.
- Se houver novos fluxos de estado, atualize os diagramas Mermaid correspondentes.
- Não altere seções que não foram afetadas pela modificação atual.
- Apresente as alterações de forma clara (preferencialmente destacando o diff em markdown ou enviando os arquivos reestruturados).

### Resultado Esperado
O conteúdo atualizado dos arquivos markdown aplicáveis de forma pronta para substituição.
```
