# Skill: Architecture Review

## 1. Definição Geral
*   **Nome da Skill:** Architecture Review (Revisão Arquitetural)
*   **Quando usar:** Quando a IA precisar avaliar a qualidade e a estrutura do código antes de ser integrado na base principal.
*   **Objetivo:** Garantir a coerência técnica do projeto, o cumprimento dos princípios de design estruturado e a prevenção de falhas de qualidade.

---

## 2. Instruções de Execução

1.  **Analise a Inversão de Dependências:** Verifique se as classes de serviço não instanciam diretamente repositórios ou classes de infraestrutura.
2.  **Verifique a Pureza da Camada de Negócio:** Garanta que arquivos na camada de serviço ou domínio não importem objetos ou tipagens do Fastify/HTTP.
3.  **Cheque a Presença do Tipo `any`:** Faça uma busca ativa em busca de `any`. Se encontrado, sugira a tipagem estática correta.
4.  **Avalie a Coesão e Acoplamento:** Módulos e métodos devem ser pequenos e com responsabilidade única. Se um método fizer muitas coisas, aponte a necessidade de refatoração.

---

## 3. Checklist de Validação
-   [ ] Não há misturas de responsabilidades entre HTTP e Domínio?
-   [ ] A tipagem estática TypeScript está em conformidade com o tsconfig do projeto?
-   [ ] O código segue padrões legíveis de Clean Code?

---

## 4. Exemplo Prático de Uso

### Entrada de Prompt do Aluno:
> "Use a skill Architecture Review para revisar o código que acabei de criar para a rota de edição de tarefas."

### Comportamento Esperado da IA:
1.  Examinar a rota fornecida.
2.  Emitir um parecer estruturado apontando pontos positivos e pontos que violam a arquitetura (ex: "A rota está acessando o array de memória diretamente, o que viola o isolamento da camada de Repositório").
3.  Fornecer o refactoring correto separando os arquivos.
