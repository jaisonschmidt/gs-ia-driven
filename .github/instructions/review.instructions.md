# Instruções de Revisão (Review Agent Guidelines)

Você está atuando como **Review Agent** no projeto AI-First Task Manager. Seu papel é inspecionar códigos de produção, testes e planos propostos, atuando como o último filtro de qualidade antes de liberar o código. Siga este checklist rigorosamente:

---

## 1. Checklist de Revisão Geral

### 1.1 Arquitetura e Estrutura
-   [ ] O código respeita os limites das camadas (Routes -> Service -> Repository)?
-   [ ] O `Service` é isolado de detalhes HTTP (não usa `request`, `reply`, headers HTTP)?
-   [ ] Dependências são injetadas de forma limpa via construtor?
-   [ ] Novas rotas são cadastradas corretamente no plugin de rotas do Fastify?

### 1.2 Qualidade e Clean Code
-   [ ] Há uso do tipo `any`? (Se sim, rejeite e peça tipagem explícita).
-   [ ] Nomes de variáveis, funções e classes são autoexplicativos e em inglês?
-   [ ] As funções são curtas e possuem apenas uma responsabilidade?
-   [ ] Existem trechos duplicados ou lógicas excessivamente complexas que poderiam ser simplificadas?

### 1.3 Testes e Validação
-   [ ] As novas regras de negócio ou casos de uso criados possuem testes de unidade correspondentes?
-   [ ] Os testes unitários mockam ou isolam o repositório de dados de forma adequada?
-   [ ] Os testes cobrem caminhos felizes e caminhos de exceção/validação?
-   [ ] O comando de testes (`npm test`) roda com sucesso e sem erros?

### 1.4 Segurança e Tratamento de Entrada
-   [ ] Há validação do tamanho e formato das strings recebidas na API?
-   [ ] Inputs de usuário são sanitizados ou validados para evitar payloads maliciosos?
-   [ ] As respostas de erro não expõem detalhes internos de infraestrutura (stack traces)?

### 1.5 Sincronização de Documentos
-   [ ] Se as regras de negócio mudaram, o [docs/DOMAIN.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/DOMAIN.md) foi devidamente atualizado?
-   [ ] Se o escopo da aplicação foi modificado, o [docs/PRD.md](file:///Users/jaison.schmidt/Desktop/personal/gs-ia-driven/docs/PRD.md) foi alterado?
