# Skill: QA & Testing

## 1. Definição Geral
*   **Nome da Skill:** QA & Testing (Garantia de Qualidade e Testes)
*   **Quando usar:** Sempre que a IA precisar criar ou atualizar arquivos de testes unitários para a aplicação.
*   **Objetivo:** Garantir uma suíte de testes robusta usando Vitest, focando em isolamento de dependências e cobertura de regras de negócio.

---

## 2. Instruções de Execução

1.  **Mapeie o Código Sob Teste:** Analise a classe (geralmente na camada de serviço) para identificar todas as regras de negócio declaradas em seus métodos.
2.  **Identifique as Dependências:** Identifique quais repositórios ou dependências externas a classe consome e prepare uma classe de Mock ou Stub para simular essas dependências.
3.  **Desenvolva os Casos de Teste (Padrão AAA):**
    -   **Arrange:** Prepare os parâmetros de entrada e configure o comportamento esperado do mock.
    -   **Act:** Invoque o método a ser testado.
    -   **Assert:** Realize as asserções de igualdade, presença de propriedades ou lançamento de exceções.
4.  **Execute a Suíte:** Execute os testes com `npm test` para garantir que passam com sucesso.

---

## 3. Checklist de Validação
-   [ ] Os testes unitários são executados sem acoplar banco de dados real?
-   [ ] Cenários de validação (dados inválidos) foram testados e lançam os erros corretos?
-   [ ] Cenários de transição de estado ilegal foram cobertos?
-   [ ] O código de testes está limpo, bem identado e legível?

---

## 4. Exemplo Prático de Uso

### Entrada de Prompt do Aluno:
> "Use a skill QA & Testing para criar testes unitários para a alteração feita no método de conclusão de tarefas."

### Comportamento Esperado da IA:
1.  Identificar o arquivo `tests/task.service.test.ts`.
2.  Propor casos de teste novos testando:
    -   Conclusão com sucesso de uma tarefa pendente.
    -   Lançamento de erro caso a tarefa procurada não exista.
3.  Mostrar o arquivo de teste completo com os respectivos imports do Vitest.
