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


```

---

## 💻 Como rodar o projeto na sua máquina

### Pré-requisitos
* **Node.js** (versão 18 ou superior) instalado
* **Git** instalado

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jjohnbr/PROJETO-DEVOPS.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd PROJETO-DEVOPS
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Execute os testes unitários (opcional):**
   ```bash
   npm test
   ```

5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para visualizar a calculadora rodando localmente.

---

## 🔄 Fluxo de Trabalho (Git & Pull Requests)

Para manter a estabilidade do ambiente de produção, a branch `main` possui regra de proteção ativa:

1. **Crie uma nova branch a partir da `main`:**
   ```bash
   git checkout -b feat/nome-da-alteracao
   ```

2. **Faça as alterações desejadas, salve e envie para o GitHub:**
   ```bash
   git add .
   git commit -m "feat: descricao da alteracao"
   git push -u origin feat/nome-da-alteracao
   ```

3. **Abra um Pull Request:**
   Acesse o repositório no GitHub, abra um **Pull Request** para a branch `main` e aguarde a verificação automática do **GitHub Actions** (`CI/CD / build-and-test`).

4. **Faça o Merge:**
   Com o status aprovado (verde), clique em **Merge pull request** para disparar o deploy automático na **Vercel**.



   -------------------------------------------------------------



   # 🧮 Calculadora de IMC — Projeto DevOps (CI/CD)

Aplicação web desenvolvida com **Next.js** e **TypeScript** para cálculo de Índice de Massa Corporal (IMC), estruturada com uma esteira completa de **Integração Contínua (CI)** e **Entrega Contínua (CD)** utilizando **GitHub Actions**, **Jest** e **Vercel**.

---

## 📋 Sobre o Projeto e Características

Este projeto demonstra na prática a aplicação de cultura e automação **DevOps** no ciclo de vida de uma aplicação web moderna:

* **Interface Web Interativa:** Permite informar peso (kg) e altura (m), calculando instantaneamente o IMC e classificando o resultado (Abaixo do peso, Peso normal, Sobrepeso ou Obesidade), com validação para impedir entradas inválidas ou zeradas[cite: 1, 9].
* **Qualidade Automatizada com Testes Unitários (Jest):** A lógica de cálculo é isolada e testada automaticamente para garantir precisão matemática e evitar regressões antes que qualquer código chegue à produção[cite: 1, 9].
* **Integração Contínua (CI) via GitHub Actions:** A cada novo *Pull Request* aberto para a branch `main`, o pipeline instala as dependências, executa os testes unitários e valida o *build* da aplicação[cite: 9].
* **Proteção de Branch (`main`):** A branch principal possui regras de bloqueio ativas — caso algum teste falhe no pipeline, o botão de *Merge* é bloqueado automaticamente no GitHub[cite: 1, 9].
* **Entrega Contínua (CD) na Vercel:** Após a aprovação dos testes e o *Merge* na branch `main`, a esteira dispara automaticamente o deploy da nova versão para o ambiente de produção na Vercel[cite: 9].

---

## 🛠️ Tecnologias Utilizadas

* **Frontend & Framework:** Next.js (App Router), React, TypeScript[cite: 1, 9]
* **Testes Automatizados:** Jest[cite: 1, 9]
* **Versionamento & CI/CD:** Git, GitHub, GitHub Actions[cite: 1, 9]
* **Hospedagem & Deploy:** Vercel[cite: 9]

---

## 📂 Estrutura do Projeto

```text
PROJETO-DEVOPS/
├── .github/
│   └── workflows/
│       └── ci-cd.yml           # Pipeline de CI/CD (Testes, Build e Deploy)[cite: 1, 9]
├── __tests__/
│   └── calculadora.test.js # Testes unitários da lógica do IMC[cite: 1, 9]
├── app/
│   ├── layout.tsx          # Estrutura global da página[cite: 1]
│   └── page.tsx            # Interface principal da calculadora[cite: 1, 9]
├── src/
│   └── utils/
│       └── calculadora.js  # Função pura de cálculo e classificação do IMC[cite: 1, 9]
├── jest.config.js          # Configuração do Jest[cite: 1, 9]
├── package.json            # Dependências e scripts (dev, build, test)[cite: 1, 9]
└── README.md               # Documentação completa do projeto[cite: 1]
```

---

## 💻 Como rodar o projeto na sua máquina

Qualquer pessoa pode clonar e executar este projeto localmente seguindo os passos abaixo:

### 1. Pré-requisitos
Certifique-se de ter instalado em seu computador:
* **Node.js** (versão 18 ou superior) — [Download oficial](https://nodejs.org/)
* **Git** — [Download oficial](https://git-scm.com/)

### 2. Passo a passo de instalação e execução

1. **Clone o repositório:**
   Abra o terminal (Prompt de Comando, PowerShell, Bash ou terminal do VS Code) e execute:
   ```bash
   git clone [https://github.com/jjohnbr/PROJETO-DEVOPS.git](https://github.com/jjohnbr/PROJETO-DEVOPS.git)
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd PROJETO-DEVOPS
   ```

3. **Instale todas as dependências:**
   ```bash
   npm install
   ```

4. **Execute os testes unitários (para validar o funcionamento):**
   ```bash
   npm test
   ```

5. **Inicie o servidor local de desenvolvimento:**
   ```bash
   npm run dev
   ```

6. **Acesse a aplicação no navegador:**
   Com o servidor rodando, abra o seguinte link no seu navegador:
   👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔄 Fluxo de Contribuição (Git & Pull Requests)

Para realizar alterações e acionar a esteira de CI/CD:

1. **Crie uma nova branch a partir da `main`:**
   ```bash
   git checkout -b feat/sua-alteracao
   ```

2. **Faça a alteração desejada no código, salve e envie para o GitHub:**
   ```bash
   git add .
   git commit -m "feat: descreva sua alteracao"
   git push -u origin feat/sua-alteracao
   ```

3. **Abra um Pull Request:**
   * Acesse o repositório no GitHub: **[https://github.com/jjohnbr/PROJETO-DEVOPS](https://github.com/jjohnbr/PROJETO-DEVOPS)**[cite: 1, 9]
   * Clique em **Compare & pull request** e crie o PR apontando para a branch `main`[cite: 9].
   * Aguarde o check **`CI/CD / build-and-test`** finalizar[cite: 3, 9].
   * Com o visto verde aprovado, clique em **Merge pull request** para publicar a alteração automaticamente na Vercel[cite: 3, 9].