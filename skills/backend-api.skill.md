# Skill: Backend API Development

## 1. Definição Geral
*   **Nome da Skill:** Backend API Development (Desenvolvimento de APIs Backend)
*   **Quando usar:** Sempre que a IA precisar criar novas rotas HTTP, modificar serviços de negócios ou alterar a simulação de repositório em memória.
*   **Objetivo:** Guiar a IA no desenvolvimento de código TypeScript limpo, modular, fortemente tipado e em estrita aderência ao padrão arquitetural em camadas da aplicação.

---

## 2. Instruções de Execução

Ao receber uma tarefa de criação/alteração backend:
1.  **Analise os Tipos:** Antes de escrever código executável, defina os tipos e interfaces em `task.types.ts`.
2.  **Desenvolva a Persistência (Repository):** Implemente qualquer alteração necessária em `task.repository.ts` e exporte a interface correspondente.
3.  **Implemente a Regra de Negócio (Service):** Escreva o fluxo lógico no `task.service.ts`, validando os parâmetros recebidos. Garanta que o serviço utilize apenas a interface do repositório injetada no construtor.
4.  **Crie a Rota (Routes):** Crie ou edite a rota correspondente em `task.routes.ts`. Use try/catch para capturar os erros vindos do serviço e mapear para o código de resposta HTTP correto (ex: `400` para validação, `404` para não encontrado, `200`/`201` para sucesso).

---

## 3. Checklist de Validação
-   [ ] A tipagem estática do TypeScript está completa e sem uso de `any`?
-   [ ] O tratamento de erros HTTP é feito na camada de Rota, e não no Serviço?
-   [ ] O serviço recebe o repositório como injeção de dependência e não o instancia manualmente?
-   [ ] O servidor inicia com sucesso executando `npm run dev`?

---

## 4. Exemplo Prático de Uso

### Entrada de Prompt do Aluno:
> "Use a skill Backend API Development para adicionar um método de listagem de tarefas concluídas no serviço e repositório."

### Comportamento Esperado da IA:
1.  Identificar o arquivo `task.repository.ts` e adicionar um método `findCompleted(): Promise<Task[]>`.
2.  Identificar o arquivo `task.service.ts` e implementar `listCompletedTasks(): Promise<Task[]>`.
3.  Exibir o código proposto alterando apenas esses trechos com os tipos corretos.
