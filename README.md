# 🧮 Calculadora de IMC — Projeto DevOps (CI/CD)

Aplicação web desenvolvida com **Next.js** e **TypeScript** para cálculo de Índice de Massa Corporal (IMC), estruturada com uma esteira completa de **Integração Contínua (CI)** e **Entrega Contínua (CD)** utilizando **GitHub Actions**, **Jest** e **Vercel**.

---

## 🎯 O que o projeto faz?

1. **Interface Web Interativa:** Permite ao usuário informar peso (kg) e altura (m), calculando automaticamente o valor do IMC e exibindo a classificação correspondente (Abaixo do peso, Peso normal, Sobrepeso ou Obesidade) com validação de entradas inválidas.
2. **Testes Automatizados (Jest):** Garante a precisão matemática do cálculo e o tratamento de erros antes que qualquer alteração seja integrada ao código principal.
3. **Pipeline de CI/CD (GitHub Actions):**
   * **Em Pull Requests (`pull_request`):** Instala as dependências, executa os testes unitários e valida o *build* da aplicação. Se algum teste falhar, o *merge* para a branch `main` é bloqueado automaticamente.
   * **Na Branch Principal (`main`):** Após a aprovação e o *merge* do Pull Request, o pipeline executa novamente as validações e realiza o **deploy automático em produção na Vercel**.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend / Framework:** Next.js (App Router), React, TypeScript
* **Testes Unitários:** Jest
* **CI/CD & Versionamento:** Git, GitHub, GitHub Actions
* **Hospedagem / Deploy:** Vercel

---

## 📂 Estrutura do Projeto

```text
├── .github/workflows/
│   └── ci-cd.yml          # Configuração da esteira de CI/CD (Testes, Build e Deploy)
├── __tests__/
│   └── calculadora.test.js # Testes unitários da lógica de cálculo de IMC
├── app/
│   └── page.tsx           # Interface principal da aplicação
├── src/utils/
│   └── calculadora.js     # Lógica pura do cálculo e classificação do IMC
├── jest.config.js         # Configuração do framework de testes Jest
└── package.json           # Dependências e scripts do projeto