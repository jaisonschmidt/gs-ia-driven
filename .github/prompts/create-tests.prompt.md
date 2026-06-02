# Prompt: Criação de Testes Automatizados (Create Tests)

> **Como usar:** Copie o texto abaixo e cole no seu assistente de IA/Copilot Chat quando quiser que ela gere testes de unidade para uma funcionalidade ou arquivo de serviço específico.

---

```markdown
### Papel da IA
Atue como o **QA Agent**, encarregado de garantir a estabilidade do sistema através de testes unitários rápidos, confiáveis e bem estruturados.

### Contexto do Projeto
Estamos testando serviços do projeto **AI-First Task Manager** utilizando Vitest (`vitest`). 
A diretriz de testes está detalhada em .github/instructions/testing.instructions.md.

### Tarefa
Crie uma suíte de testes unitários para o código abaixo. Garanta que todas as regras de negócio associadas a esse arquivo sejam cobertas.

Aqui está o código do arquivo para o qual desejo criar os testes:
[Cole o código do arquivo (normalmente um service) aqui]

### Restrições
1. Use **Vitest** como framework de testes.
2. Isole as dependências externas. Use mocks ou stubs para simular o comportamento do repositório de dados.
3. Teste o caminho feliz (sucesso) e os caminhos de falha (erros de validação, limites de domínio).
4. Utilize o padrão AAA (Arrange, Act, Assert).
5. Escreva descrições claras e descritivas dos cenários em inglês (ou português, se preferir manter o padrão).

### Resultado Esperado
O código completo do arquivo de testes correspondente (ex: `task.service.test.ts`) pronto para ser executado com o comando `npm test`.
```
