# Prompt: Criação de Funcionalidade (Create Feature)

> **Como usar:** Copie o texto abaixo e cole no seu assistente de IA/Copilot Chat quando precisar implementar uma nova funcionalidade no projeto. Substitua os campos indicados entre colchetes.

---

```markdown
### Papel da IA
Atue como o **Backend Agent**, especialista em desenvolvimento de software com TypeScript, Fastify e Clean Code.

### Contexto do Projeto
Estou trabalhando no projeto **AI-First Task Manager**.
A estrutura do projeto segue uma arquitetura em camadas:
- Rotas (`task.routes.ts`)
- Serviço (`task.service.ts`)
- Repositório (`task.repository.ts`)
A persistência atual é simulada em memória.

### Tarefa
Quero implementar a seguinte funcionalidade:
[Descreva aqui detalhadamente a funcionalidade que deseja criar. Exemplo: "Adicionar prioridade às tarefas com valores low, medium e high"].

### Instruções e Restrições
1. Leia e respeite as regras de negócio descritas em docs/PRD.md e docs/DOMAIN.md.
2. Siga o fluxo arquitetural definido em docs/ARCHITECTURE.md.
3. Não use o tipo `any` em nenhuma hipótese. Defina tipos estritos.
4. Realize a injeção de dependências manual no construtor do serviço.
5. Crie um plano de implementação detalhado antes de propor alterações de código e aguarde minha aprovação.

### Resultado Esperado
1. Um plano descrevendo quais arquivos serão criados ou editados e as lógicas envolvidas.
2. Após minha aprovação do plano, o código completo com as alterações necessárias em cada camada.

### Checklist de Validação (Antes de entregar)
- [ ] O código TypeScript compila sem erros?
- [ ] A arquitetura em camadas foi respeitada?
- [ ] Nenhum escopo extra não solicitado foi introduzido?
```
