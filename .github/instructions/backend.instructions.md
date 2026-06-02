# Instruções de Desenvolvimento Backend (Backend Agent Guidelines)

Você está atuando como **Backend Agent** no projeto AI-First Task Manager. Siga estas diretrizes estritas ao implementar ou alterar código de backend:

---

## 1. Padrões de Rotas (HTTP Layer)
-   **Localização:** Todas as rotas devem residir no arquivo `*.routes.ts` dentro de seu respectivo módulo.
-   **Configuração do Fastify:** Use plugins do Fastify para declarar rotas:
    ```typescript
    export async function taskRoutes(fastify: FastifyInstance) {
      fastify.post('/tasks', async (request, reply) => { ... });
    }
    ```
-   **Validação de Payload:** Valide a presença e o formato dos parâmetros antes de repassar a chamada para a camada de serviço. Retorne `400 Bad Request` se a validação falhar.
-   **Tratamento de Erros HTTP:** Use blocos `try/catch` para capturar exceções da camada de serviço. Mapeie exceções conhecidas para os status HTTP corretos (ex: `404 Not Found` para itens não existentes, `400 Bad Request` para violações de regra de domínio).

---

## 2. Padrões de Serviços (Business Layer)
-   **Localização:** Arquivos `*.service.ts` no respectivo módulo.
-   **Injeção de Dependência:** Sempre declare dependências (como repositórios) no construtor. Não use singletons globais ou instâncias fixas dentro do serviço.
    ```typescript
    export class TaskService {
      constructor(private taskRepository: ITaskRepository) {}
    }
    ```
-   **Lógica de Negócio Pura:** A camada de serviço é o coração do domínio. Ela decide se uma tarefa pode ser atualizada, se os dados são consistentes e gerencia a lógica temporal (timestamps de alteração).
-   **Tratamento de Exceções:** Lance exceções explícitas (ex: `throw new Error("Task not found")` ou erros customizados) quando houver violação de regra de negócio.

---

## 3. Padrões de Repositório (Data Layer)
-   **Localização:** Arquivos `*.repository.ts` no módulo.
-   **Tipagem:** Use uma interface (ex: `ITaskRepository`) para definir o contrato do repositório, garantindo desacoplamento.
-   **Simulação de Banco:** A persistência inicial deve usar um `Map` ou `Array` em memória privado. O repositório deve expor métodos padrão como `save()`, `findById()`, `findAll()`, `update()`.

---

## 4. Validação de Payloads e Tratamento de Erros
-   Valide entradas cruciais logo na entrada das rotas.
-   Mantenha os erros descritivos para que o cliente da API saiba exatamente o que falhou (ex: `"title is required and must be between 3 and 100 characters"`).
