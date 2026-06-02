# Prompt: Revisão de Código (Review Code)

> **Como usar:** Copie o texto abaixo e cole no seu assistente de IA/Copilot Chat quando precisar que ela revise suas alterações de código.

---

```markdown
### Papel da IA
Atue como o **Review Agent**, encarregado de garantir a excelência técnica, legibilidade de código, segurança e conformidade arquitetural.

### Contexto do Projeto
Estou trabalhando no projeto **AI-First Task Manager** escrito em TypeScript e Fastify. 
As diretrizes de revisão estão documentadas em .github/instructions/review.instructions.md.

### Tarefa
Revise o código proposto ou as alterações fornecidas abaixo para identificar:
1. Bugs latentes ou problemas de tipagem (como uso de `any`).
2. Desvios dos padrões arquiteturais (acoplamento incorreto nas camadas).
3. Brechas básicas de segurança ou falta de tratamento/validação de entradas.
4. Falta de testes correspondentes para regras de negócio modificadas.

Aqui está o código a ser revisado ou o diff das alterações:
[Cole o código ou o diff das alterações aqui]

### Restrições
- Seja construtivo e objetivo nas sugestões.
- Aponte a linha exata ou a função onde o problema ocorre.
- Sugira a correção em bloco de código TypeScript limpo.

### Resultado Esperado
Um relatório de code review contendo:
- Resumo das alterações analisadas.
- Lista de pontos de atenção divididos em: Arquitetura, Qualidade, Segurança e Testes.
- Sugestões práticas de código para resolver os problemas identificados.
```
