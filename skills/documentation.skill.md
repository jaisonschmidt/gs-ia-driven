# Skill: Documentation Management

## 1. Definição Geral
*   **Nome da Skill:** Documentation Management (Gerenciamento de Documentação)
*   **Quando usar:** Quando houver alterações no escopo ou regras do sistema que exijam atualização do PRD, Domínio ou Arquitetura.
*   **Objetivo:** Manter a documentação markdown rica, coerente, didática e em sincronia com o estado real do projeto.

---

## 2. Instruções de Execução

1.  **Mapeie as Áreas Afetadas:** Analise se a mudança afeta requisitos de produto (PRD), fluxo técnico (Architecture) ou regras do negócio (Domain).
2.  **Identifique Termos no Glossário:** Adicione novos termos criados na nova feature ao glossário de termos em `DOMAIN.md`.
3.  **Atualize Diagramas:** Se houver novas transições de estado, modifique o diagrama de máquina de estados Mermaid em `DOMAIN.md`.
4.  **Escreva em Tom Didático:** Mantenha a explicação clara, em Português do Brasil, ideal para estudantes que estão aprendendo a desenvolver softwares.

---

## 3. Checklist de Validação
-   [ ] A documentação está escrita de forma clara e livre de jargões complexos sem explicação?
-   [ ] Os diagramas Mermaid estão sintaticamente corretos?
-   [ ] Os links entre arquivos relativos estão corretos?

---

## 4. Exemplo Prático de Uso

### Entrada de Prompt do Aluno:
> "Use a skill Documentation Management para adicionar a prioridade de tarefas ao glossário e diagramas."

### Comportamento Esperado da IA:
1.  Localizar `docs/DOMAIN.md`.
2.  Adicionar "Priority (Prioridade)" ao glossário e atualizar as tabelas de entidades com o campo `priority`.
3.  Apresentar o trecho editado em markdown de forma clara.
