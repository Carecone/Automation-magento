# Automation-magento

# Teste automatizado utilizando Cypress

# Cypress Configuração e Utilização

Este documento descreve os passos necessários para configurar e utilizar o projeto. 

## Pré-requisitos

Antes de começar, verifique se você possui o seguinte instalado em sua máquina:

- Node.js - https://nodejs.org/en/download

## Clonando um Projeto do GitHub

Para clonar o projeto para o seu ambiente local, siga estas etapas:

1. Abra o terminal (ou prompt de comando) no seu computador.

2. Navegue até o diretório onde você deseja clonar o projeto. Por exemplo, se deseja cloná-lo para sua pasta de projetos, você pode usar o comando `cd` para navegar até essa pasta:
   
```bash
cd caminho/para/sua/pasta/de/projetos
```

1. No GitHub, vá até o repositório do projeto que deseja clonar.

2. No canto superior direito do repositório, clique no botão verde "Code" e copie a URL fornecida.

3. Volte para o terminal e use o comando git clone seguido do URL que você copiou. Isso criará uma cópia local do repositório em seu computador:

```bash
git clone https://github.com/usuario/nome-do-projeto.git
```
Agora você tem uma cópia do projeto em seu ambiente local.

## Instalação

Para instalar todas a dependências, siga estas etapas:

1. Abra o terminal e navegue até o diretório raiz do projeto.
2. Execute o seguinte comando para instalar via npm:

```bash
npm install --save-dev
```
Isso instalará todas as dependências do projeto.

## Execução 

Para executar os testes, siga as etapas:

1. Com o projeto aberto no Visual Studio Code, abra o terminal e execute o seguinte comando:


```bash
npx cypress open
```
Isso abrirá a interface do usuário do Cypress, onde você pode selecionar e executar testes individualmente.

2. Você tambem pode utilizar esse comando, isso executará todos os testes em modo de linha de comando:
```bash
npx cypress run
```
