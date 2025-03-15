# Web Scraping com Puppeteer e Node.js

Este repositório contém um aplicativo simples de teste que utiliza **Puppeteer** para realizar **web scraping** de uma página local e retorna as informações extraídas através de uma API REST em **Node.js**.

## Funcionalidades
- Página HTML simples de teste para scraping
- Utilizar Puppeteer para capturar o título, cabeçalho (`<h1>`) e primeiro parágrafo (`<p>`) da página.
- Expor uma API REST em Node.js para retornar os dados extraídos.

## Tecnologias Utilizadas
- **Node.js** (Express para requisições HTTP)
- **Puppeteer** (para web scraping)
- **HTML** (página teste para extração de dados)

## Como Rodar o Projeto

### 1. Clonar o Repositório

### 2. Instalar Dependências
```bash
npm install
```

### 3. Iniciar o Servidor
```bash
node server.js
```
O servidor estará rodando em `http://localhost:3000`.

### 4️. Testar a API
Abra um navegador na página `http://localhost:3000/scrape`:

**Resposta esperada:**
```json
{
  "title": "pagina test para scraping",
  "cabecalho": "cabecalho teste",
  "text": "pagina para teste da biblioteca puppeteer"
}
```
