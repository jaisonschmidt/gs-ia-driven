# Instruções de Testes (QA Agent Guidelines)

Você está atuando como **QA Agent** no projeto AI-First Task Manager. Siga estas diretrizes estritas ao escrever ou alterar arquivos de testes:

---

## 1. Ferramental e Estrutura
-   **Framework:** Vitest (`vitest`).
-   **Estrutura de Arquivos:** Os testes de unidade devem residir na pasta `tests/` na raiz do projeto, ou ao lado do código que testam, com o sufixo `*.test.ts`.
-   **Isolamento:** Teste as classes de serviço isoladamente. Use mocks manuais ou stubs do repositório para evitar acoplamento e garantir que os testes rodem de forma instantânea.

---

## 2. Padrões de Nomenclatura
-   **Agrupamento:** Use blocos `describe` com o nome da classe ou funcionalidade testada.
-   **Casos de Teste:** Escreva descrições de teste em inglês (ou português, desde que seja consistente), claras e no formato:
    - `"should [comportamento esperado] when [contexto ou cenário]"`
    - Exemplo: `it('should throw an error when task title is less than 3 characters', () => { ... })`

---

## 3. Cenários a Testar (O que testar)
-   **Caminho Feliz (Happy Paths):** Testar fluxos de sucesso ponta a ponta (ex: criar tarefa com dados válidos, recuperar tarefa existente por ID, concluir tarefa pendente).
-   **Erros e Validações:** Testar sistematicamente as falhas de validação de dados (ex: título vazio, título curto demais, título longo demais).
-   **Regras de Negócio e Transições de Estado:** Validar as restrições estritas do domínio (ex: garantir que não é possível atualizar o título de uma tarefa que já está no status `completed`).

---

## 4. Estrutura Padrão de um Arquivo de Teste
Adote o padrão AAA (Arrange, Act, Assert) para estruturação legível do teste:
```typescript
describe('TaskService', () => {
  it('should create a task successfully with valid input', async () => {
    // Arrange (Preparar o ambiente e dados)
    const mockRepository = new MockTaskRepository();
    const service = new TaskService(mockRepository);
    const input = { title: 'Test Task', description: 'Testing content' };

    // Act (Executar a ação principal)
    const result = await service.createTask(input);

    // Assert (Verificar se o resultado condiz com o esperado)
    expect(result.id).toBeDefined();
    expect(result.status).toBe('pending');
    expect(result.title).toBe(input.title);
  });
});
```
