# AI-First Development Tutorial — AI-First Task Manager

Bem-vindo ao tutorial autoguiado sobre **AI-First Development** (Desenvolvimento Orientado a IA)! Este repositório foi construído especificamente como material didático para ensinar como estruturar projetos de software modernos de forma que assistentes de inteligência artificial (como GitHub Copilot, Copilot Chat, ChatGPT, Gemini, ou agentes autônomos de IA) possam atuar com máxima precisão, coesão técnica e aderência ao negócio.

Se você está acostumado a usar a IA apenas para autocompletar código ou criar funções isoladas, prepare-se para elevar seu nível: você aprenderá a estruturar o **contexto** do seu repositório de forma profissional.

---

## Sumário
1. [Introdução](#1-introdução)
2. [Pré-requisitos](#2-pré-requisitos)
3. [Como Executar o Projeto](#3-como-executar-o-projeto)
4. [O que é AI-First Development?](#4-o-que-é-ai-first-development)
5. [Etapa 1 — Entendendo o Produto](#etapa-1--entendendo-o-produto)
6. [Etapa 2 — Criando um PRD](#etapa-2--criando-um-prd)
7. [Etapa 3 — Criando Documentação de Domínio](#etapa-3--criando-documentação-de-domínio)
8. [Etapa 4 — Criando Documentação de Arquitetura](#etapa-4--criando-documentação-de-arquitetura)
9. [Etapa 5 — Criando AGENTS.md](#etapa-5--criando-agentsmd)
10. [Etapa 6 — Criando Copilot Instructions](#etapa-6--criando-copilot-instructions)
11. [Etapa 7 — Criando Instruções Segmentadas](#etapa-7--criando-instruções-segmentadas)
12. [Etapa 8 — Criando Skills](#etapa-8--criando-skills)
13. [Etapa 9 — Criando Prompts Reutilizáveis](#etapa-9--criando-prompts-reutilizáveis)
14. [Etapa 10 — Criando Exemplos para Orientar a IA (Few-shot)](#etapa-10--criando-exemplos-para-orientar-a-ia-few-shot)
15. [Etapa 11 — Executando uma Tarefa Usando IA](#etapa-11--executando-uma-tarefa-usando-ia)
16. [Etapa 12 — Revisando o Resultado Gerado](#etapa-12--revisando-o-resultado-gerado)
17. [Desafio Guiado — Implementando uma Feature com IA](#desafio-guiado--implementando-uma-feature-com-ia)
18. [Conclusão](#conclusão)

---

## 1. Introdução
Este repositório contém uma aplicação funcional simples chamada **AI-First Task Manager** — uma API REST desenvolvida em Node.js com TypeScript e Fastify, contendo testes automatizados em Vitest. O objetivo principal aqui não é a complexidade da aplicação, mas sim a sua **infraestrutura de contexto**. Ao longo deste tutorial, você entenderá como cada arquivo de documentação e instrução serve de guia cognitivo para que as IAs criem código de forma extremamente eficiente.

---

## 2. Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/) (versão 20 ou superior)
-   Um cliente HTTP (como Bruno, Postman, Insomnia ou extensão Thunder Client)
-   Um assistente de IA configurado na sua IDE de preferência (GitHub Copilot, Gemini Code Assist, Cursor IDE, etc.)

---

## 3. Como Executar o Projeto

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Execute o servidor em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O servidor iniciará em `http://localhost:3333`.
3.  **Execute a suíte de testes:**
    ```bash
    npm test
    ```
4.  **Verifique a compilação do TypeScript:**
    ```bash
    npm run lint
    ```

---

## 4. O que é AI-First Development?
Tradicionalmente, a programação consiste em ler requisitos e escrever códigos manualmente linha por linha. No **AI-First Development** (Desenvolvimento Impulsionado por IA), a IA atua como seu par de desenvolvimento ou até mesmo como um executor autônomo de tarefas complexas. 

A chave para o sucesso nesse modelo é a **Context Engineering** (Engenharia de Contexto). A IA possui limites de memória (chamados de "janela de contexto"). Se fornecermos a ela apenas arquivos de código soltos, ela tentará "adivinhar" o design do sistema e as regras do produto. Ao munir o repositório com regras explícitas (PRD, modelos de domínio, instruções específicas e exemplos), nós blindamos a IA contra "alucinações" e garantimos código consistente desde a primeira tentativa.

---

## Etapa 1 — Entendendo o Produto
*   **Objetivo:** Compreender o que é o sistema e seus objetivos de negócios antes de olhar para o código.
*   **Explicação Conceitual:** Uma IA não consegue construir a coisa certa se não souber o "porquê". Entender a visão do produto é o primeiro passo para alinhar a IA com os objetivos do negócio.
*   **Arquivos Envolvidos:** [docs/PRD.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/PRD.md) (Seções 1 e 2).
*   **Atividade Prática:** Abra o chat do Copilot e faça a pergunta do prompt abaixo para verificar o que a IA entende do sistema.
*   **Prompt Sugerido:**
    > "Com base no arquivo docs/PRD.md, qual é o problema principal que o AI-First Task Manager resolve e quem é o seu público-alvo?"
*   **Critério de Conclusão:** O Copilot deve responder identificando claramente que o projeto é um gerenciador de tarefas minimalista para desenvolvedores e estudantes, evitando ferramentas complexas.

---

## Etapa 2 — Criando um PRD
*   **Objetivo:** Compreender a estrutura de um PRD e como ele restringe o escopo do que a IA gera.
*   **Explicação Conceitual:** O PRD (Product Requirements Document) define o escopo do MVP, impedindo a IA de criar código desnecessário (ex: criar sistemas de login ou conexões com bancos complexos por conta própria).
*   **Arquivos Envolvidos:** [docs/PRD.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/PRD.md).
*   **Atividade Prática:** Peça para a IA identificar o escopo do MVP.
*   **Prompt Sugerido:**
    > "De acordo com o docs/PRD.md, quais são as funcionalidades inclusas no MVP e quais estão explicitamente fora de escopo?"
*   **Critério de Conclusão:** A IA deve listar as 4 rotas/funcionalidades do MVP e destacar que banco relacional externo e autenticação estão fora de escopo.

---

## Etapa 3 — Criando Documentação de Domínio
*   **Objetivo:** Conhecer as regras de validação e restrições de estado da aplicação.
*   **Explicação Conceitual:** A documentação de domínio (`DOMAIN.md`) define as entidades (`Task`), seus atributos e como seus estados mudam (máquina de estados). Sem isso, a IA pode propor transições ilegais (como permitir edição de uma tarefa já concluída).
*   **Arquivos Envolvidos:** [docs/DOMAIN.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/DOMAIN.md).
*   **Atividade Prática:** Pergunte à IA sobre as restrições de alteração de estado.
*   **Prompt Sugerido:**
    > "Se eu tentar editar o título de uma tarefa que possui o status 'completed', qual regra de negócio declarada em docs/DOMAIN.md será violada?"
*   **Critério de Conclusão:** A IA deve responder que tarefas concluídas são imutáveis (não podem ter título ou descrição alterados).

---

## Etapa 4 — Criando Documentação de Arquitetura
*   **Objetivo:** Entender a organização estrutural do projeto e o fluxo de dados.
*   **Explicação Conceitual:** A documentação arquitetural (`ARCHITECTURE.md` e ADRs) dita como o código deve ser organizado (ex: em camadas: Rota -> Serviço -> Repositório). Ela impede que a IA misture lógicas HTTP (como manipular requisições Fastify) dentro das regras de negócio (Serviços).
*   **Arquivos Envolvidos:** [docs/ARCHITECTURE.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/ARCHITECTURE.md) e [docs/ADR/ADR-0001-project-architecture.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/ADR/ADR-0001-project-architecture.md).
*   **Atividade Prática:** Valide com a IA onde deve ser colocada a lógica HTTP.
*   **Prompt Sugerido:**
    > "Com base em docs/ARCHITECTURE.md, quais são as responsabilidades da camada de Rotas e como ela se comunica com a camada de Serviço?"
*   **Critério de Conclusão:** A IA deve explicar que as rotas lidam com validações HTTP, capturam erros do serviço e mapeiam códigos de resposta (ex: 201, 400, 404).

---

## Etapa 5 — Criando AGENTS.md
*   **Objetivo:** Compreender a delegação de personas para agentes especializados de IA.
*   **Explicação Conceitual:** O `AGENTS.md` descreve os papéis virtuais (Product Agent, Backend Agent, QA Agent, etc.) que a IA deve assumir ao executar tarefas. Isso garante que a IA atue com o "foco mental" correto.
*   **Arquivos Envolvidos:** [AGENTS.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/AGENTS.md).
*   **Atividade Prática:** Peça à IA para descrever o seu papel como QA Agent.
*   **Prompt Sugerido:**
    > "Consulte AGENTS.md. Quais são as responsabilidades do QA Agent e quais arquivos ele deve consultar antes de trabalhar?"
*   **Critério de Conclusão:** A IA deve listar as responsabilidades de teste unitário, citar a dependência do Vitest e que deve consultar `docs/DOMAIN.md` e `examples/tests/`.

---

## Etapa 6 — Criando Copilot Instructions
*   **Objetivo:** Aprender como as regras globais de comportamento guiam todas as respostas do assistente.
*   **Explicação Conceitual:** Instruções de comportamento global (`copilot-instructions.md`) determinam estilos de código que devem ser sempre seguidos, como proibição do tipo `any` ou uso obrigatório do TypeScript.
*   **Arquivos Envolvidos:** [.github/copilot-instructions.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/.github/copilot-instructions.md).
*   **Atividade Prática:** Pergunte se há alguma restrição técnica global de codificação no projeto.
*   **Prompt Sugerido:**
    > "De acordo com as diretrizes em .github/copilot-instructions.md, quais são as regras sobre o uso do tipo 'any' e a injeção de dependências?"
*   **Critério de Conclusão:** A IA deve confirmar que o tipo `any` é terminantemente proibido e que a injeção de dependências deve ser feita manualmente via construtor.

---

## Etapa 7 — Criando Instruções Segmentadas
*   **Objetivo:** Entender a utilidade de separar regras complexas por área técnica.
*   **Explicação Conceitual:** Ao invés de um único arquivo de instrução gigantesco, segmentamos por contextos (`backend`, `testing`, `documentation`, `review`). Isso economiza tokens da janela de contexto e previne conflitos de regras.
*   **Arquivos Envolvidos:** Pasta [.github/instructions/](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/.github/instructions/).
*   **Atividade Prática:** Solicite informações sobre como rodar a suíte de testes segundo as regras específicas.
*   **Prompt Sugerido:**
    > "Com base em .github/instructions/testing.instructions.md, qual padrão de escrita estrutural (como AAA) e framework devemos adotar para nossos testes?"
*   **Critério de Conclusão:** A IA deve citar o framework Vitest e a estrutura de três blocos Arrange, Act e Assert (AAA).

---

## Etapa 8 — Criando Skills
*   **Objetivo:** Conhecer as habilidades especializadas que descrevem passo a passo de procedimentos avançados.
*   **Explicação Conceitual:** As *skills* são guias procedimentais detalhados. Se o desenvolvedor diz "use a skill X", a IA sabe exatamente o fluxo passo a passo que deve adotar para aquela execução técnica específica.
*   **Arquivos Envolvidos:** Pasta [skills/](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/skills/).
*   **Atividade Prática:** Analise a skill de gerenciamento de documentação.
*   **Prompt Sugerido:**
    > "Descreva os passos da skill 'Documentation Management' localizada na pasta skills/ e me diga quando devo utilizá-la."
*   **Critério de Conclusão:** A IA deve resumir os passos (mapear áreas afetadas, atualizar tabelas, diagramas Mermaid, manter tom didático) e indicar o uso pós-criação de novas regras/features.

---

## Etapa 9 — Criando Prompts Reutilizáveis
*   **Objetivo:** Compreender a estrutura de prompts prontos (com templates de variáveis) que aceleram a interação humana.
*   **Explicação Conceitual:** Em vez de digitar prompts longos toda vez, mantemos uma biblioteca de prompts estruturados (`.github/prompts/`). O desenvolvedor apenas copia o template, preenche as lacunas e envia para a IA.
*   **Arquivos Envolvidos:** Pasta [.github/prompts/](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/.github/prompts/).
*   **Atividade Prática:** Peça para a IA explicar a utilidade do prompt de criação de funcionalidade.
*   **Prompt Sugerido:**
    > "Qual é a estrutura interna e o objetivo do template de prompt contido em .github/prompts/create-feature.prompt.md?"
*   **Critério de Conclusão:** A IA deve listar as seções (Papel, Contexto, Tarefa, Restrições, Resultado Esperado, Checklist) e explicar que serve para guiar implementações de código limpo.

---

## Etapa 10 — Criando Exemplos para Orientar a IA (Few-shot)
*   **Objetivo:** Compreender o conceito de *Few-shot Learning* (aprendizado a partir de poucos exemplos) em IA de código.
*   **Explicação Conceitual:** IAs aprendem muito melhor por imitação. Fornecer exemplos reais de código ideal de rotas, serviços e testes (`examples/`) do próprio repositório faz com que a IA gere novos arquivos idênticos ao padrão do projeto, eliminando erros de sintaxe ou de importação.
*   **Arquivos Envolvidos:** Pasta [examples/](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/examples/).
*   **Atividade Prática:** Solicite uma comparação de um arquivo de exemplo com o seu correspondente na pasta de código real do projeto.
*   **Prompt Sugerido:**
    > "Compare o arquivo de exemplo de serviço em examples/services/example-task-service.ts com o arquivo de serviço real em src/modules/tasks/task.service.ts. Como eles se assemelham em estrutura?"
*   **Critério de Conclusão:** A IA deve pontuar que ambos usam injeção de dependência via construtor, tratam validação de título de forma idêntica e operam sobre o mesmo contrato de repositório.

---

## Etapa 11 — Executando uma Tarefa Usando IA
*   **Objetivo:** Vivenciar a implementação de uma tarefa real delegando parte da cognição para a IA contextualizada.
*   **Explicação Conceitual:** Quando a IA tem acesso a todo o contexto que você estruturou (PRD, DOMAIN, ARCHITECTURE, AGENTS, etc.), a implementação de novas tarefas segue um processo fluído e quase sem erros humanos.
*   **Atividade Prática:** Este passo será a realização prática do nosso [Desafio Guiado](#desafio-guiado--implementando-uma-feature-com-ia). Siga as instruções descritas nessa seção abaixo.

---

## Etapa 12 — Revisando o Resultado Gerado
*   **Objetivo:** Validar e aplicar o Code Review automatizado focado em aderência técnica e regras de negócio.
*   **Explicação Conceitual:** A revisão de código humana é enriquecida quando usamos a IA como primeira barreira de contenção de erros, executando checagens baseadas na nossa pasta de regras `.github/instructions/review.instructions.md`.
*   **Atividade Prática:** Após realizar o desafio, utilize o prompt de Code Review sugerido para avaliar suas alterações antes de finalizar a atividade.

---

## Desafio Guiado — Implementando uma Feature com IA

Agora você colocará em prática o fluxo real de **AI-First Development**. 

### Descrição da Tarefa: "Adicionar prioridade às tarefas"
Seu objetivo é implementar um novo campo opcional na entidade `Task` chamado **priority** (prioridade).
As prioridades válidas devem ser: `low` (baixa), `medium` (média) e `high` (alta).

---

### Passo 1: Planejamento (Atuando como Backend Agent)
Você irá pedir para a IA elaborar um plano de modificação detalhado. Ela deve verificar as documentações de base e entender onde mexer.

**Instruções de Contexto:** Peça para a IA ler:
- [docs/PRD.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/PRD.md)
- [docs/DOMAIN.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/DOMAIN.md)
- [docs/ARCHITECTURE.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/ARCHITECTURE.md)
- [AGENTS.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/AGENTS.md)
- [.github/copilot-instructions.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/.github/copilot-instructions.md)

**Prompt 1 — Planejamento:**
```markdown
Atue como Backend Agent. Antes de alterar qualquer código, leia docs/PRD.md, docs/DOMAIN.md, docs/ARCHITECTURE.md e AGENTS.md. 
Quero adicionar prioridade às tarefas (com valores 'low', 'medium' e 'high'). 
Crie um plano de implementação detalhado, liste os arquivos que serão criados ou alterados em cada camada e aguarde minha aprovação.
```

---

### Passo 2: Implementação do Código
Uma vez aprovado o plano, solicite que a IA execute a alteração nas rotas, serviços, tipos e repositórios.

**Prompt 2 — Implementação:**
```markdown
Agora implemente a prioridade das tarefas seguindo o plano de implementação aprovado. 
Use TypeScript, mantenha a arquitetura atual (Injeção de dependência manual, camadas limpas, Fastify) e não altere nenhum escopo além do necessário. Garanta que o tipo 'priority' seja incluído na criação da tarefa (caso fornecido, senão inicie como nulo ou com valor padrão se especificado no plano) e na rota de listagem de tarefas.
```

---

### Passo 3: Criação de Testes Unitários
Agora, invoque o agente de QA para criar os testes para a nova lógica de negócio.

**Prompt 3 — Testes:**
```markdown
Atue como QA Agent. Consulte .github/instructions/testing.instructions.md e crie ou atualize os testes unitários em tests/task.service.test.ts para validar a prioridade das tarefas ('low', 'medium', 'high'), garantindo que valores de prioridade inválidos lancem erros de negócio apropriados na criação ou edição.
```

---

### Passo 4: Atualização da Documentação
Nenhuma funcionalidade está completa sem a devida atualização do ecossistema de conhecimento. Peça ao Documentation Agent para atualizar as referências.

**Prompt 4 — Documentação:**
```markdown
Atue como Documentation Agent. Consulte .github/instructions/documentation.instructions.md e atualize docs/PRD.md, docs/DOMAIN.md (incluindo as tabelas de atributos e casos de uso) e docs/ARCHITECTURE.md para refletir a nova funcionalidade de prioridade das tarefas. 
Gere também um novo arquivo de ADR em docs/ADR/ADR-0002-adicao-de-prioridade.md registrando a decisão arquitetural e o impacto dela no sistema.
```

---

### Passo 5: Revisão Final (Code Review)
Por fim, execute a verificação final do projeto usando o Review Agent.

**Prompt 5 — Review:**
```markdown
Atue como Review Agent. Consulte .github/instructions/review.instructions.md e revise todas as alterações feitas no projeto (código, testes e documentação) considerando nossa arquitetura, uso de tipos estritos, segurança de entradas, tratamento de erros HTTP e cobertura de regras de negócio. Retorne um parecer formal com o veredito final (Aprovado com ressalvas ou Aprovado).
```

---

### Checklist de Conclusão do Desafio
Ao finalizar o desafio guiado, execute os comandos locais para garantir a integridade do seu trabalho:
- [ ] O comando `npm run lint` executa sem apontar erros de TypeScript?
- [ ] O comando `npm test` roda e todos os testes unitários (incluindo os novos de prioridade) passam com sucesso?
- [ ] A rota `POST /tasks` aceita o parâmetro `{ "title": "Estudar IA", "priority": "high" }` e salva no repositório?
- [ ] A documentação do PRD e ADR-0002 está criada de forma correta em markdown?

---

## Conclusão
Parabéns! Ao seguir este tutorial, você aprendeu como construir um repositório **AI-First**. Você percebeu que ao alimentar a IA com documentações limpas, delimitação de escopo bem descrita no PRD e instruções segmentadas por contexto técnico, o assistente generativo deixa de ser apenas uma ferramenta de completar linhas de código e se torna um verdadeiro **co-piloto de engenharia** de alta fidelidade técnica. 

Use esta estrutura base em seus próximos projetos acadêmicos e profissionais para aumentar drasticamente sua produtividade e qualidade de software!