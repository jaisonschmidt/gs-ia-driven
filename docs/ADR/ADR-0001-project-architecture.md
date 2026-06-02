# Architectural Decision Record (ADR)

## ADR-0001: Definição da Arquitetura do Projeto e Stack Inicial

- **Status:** Aprovado
- **Data:** 2026-06-02
- **Autor:** Principal Software Engineer

---

## 1. Contexto

Precisamos implementar a fundação de um projeto de gerenciador de tarefas para fins educacionais. O objetivo secundário (porém central) é ensinar desenvolvedores a estruturar um projeto preparado para o desenvolvimento orientado por inteligência artificial (AI-First Development). 

A aplicação precisa:
1. Ser rápida e simples de rodar localmente, com pouquíssima configuração.
2. Possuir tipos fortes para facilitar a autocomplementação de código por assistentes virtuais (Copilot, LLMs).
3. Ter uma divisão de responsabilidades clara que ajude a IA a entender onde criar novas funcionalidades.
4. Suportar execução veloz de testes de unidade sem dependência de serviços externos ou containers (Docker).

---

## 2. Decisão

Decidimos adotar as seguintes definições de arquitetura e tecnologia:

1.  **Linguagem & Execução:** Node.js com TypeScript, utilizando `tsx` para execução de desenvolvimento e compilador nativo `tsc` para build.
2.  **Framework Web:** **Fastify** para roteamento e tratamento HTTP, por ser leve, performático e ter excelente suporte a tipagens em comparação com alternativas como Express.
3.  **Persistência:** Banco de dados **em memória** (in-memory) encapsulado em um padrão *Repository*. Os dados serão mantidos em um array/mapa simples na memória do processo.
4.  **Testes:** **Vitest** como framework de testes devido à velocidade extrema (focado em ESM) e configuração simplificada integrada com o ecossistema do Vite/TypeScript.
5.  **Design Arquitetural:** **Arquitetura em Camadas Simplificada** (Rotas -> Serviço -> Repositório) baseada em Injeção de Dependências manual via construtor.

---

## 3. Consequências

### Consequências Positivas
*   **Velocidade de Inicialização:** O aluno consegue baixar o projeto, instalar dependências e rodar a API/testes em menos de 1 minuto. Não há necessidade de configurar Docker, Postgres ou chaves de acesso externas.
*   **Clareza para a IA:** O padrão em camadas e injeção de dependência manual cria arquivos muito focados e curtos. A IA consegue ler os arquivos facilmente e sugerir novos comportamentos respeitando as fronteiras das camadas.
*   **Confiabilidade nos Testes:** Testes unitários de serviços são executados instantaneamente devido à ausência de latência de banco de dados ou carregamento de drivers complexos.

### Consequências Negativas
*   **Perda de Dados:** Parar ou reiniciar o servidor apaga todas as tarefas salvas.
    *   *Mitigação:* Explicado claramente na documentação de produto que este é um MVP com propósito educacional.
*   **Limitação de Escala:** O gerenciamento em memória impede que a aplicação escale horizontalmente (múltiplas instâncias teriam dados diferentes).
    *   *Mitigação:* O design do repositório permite que em uma etapa futura o repositório em memória seja substituído por um repositório conectado a banco de dados persistente sem alterar nenhuma linha de código de serviço.

---

## 4. Alternativas Consideradas

*   **Express com SQLite + Prisma ORM:**
    *   *Por que rejeitado:* Embora forneça persistência real, adiciona etapas complexas para alunos iniciantes (executar migrações, gerar cliente Prisma, gerenciar conexões de arquivos SQLite). Aumentaria a carga cognitiva na fase inicial do curso.
*   **Next.js (App Router):**
    *   *Por que rejeitado:* Next.js é um excelente framework fullstack, mas adiciona muita complexidade arquitetural (Server Components, Client Components, estruturas de pastas mágicas baseadas em roteador de arquivos) que desviariam o foco da estruturação de contexto pura para IA de backend tradicional.
