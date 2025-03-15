const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));


app.get("/scrape", async (req, res) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`http://localhost:${PORT}/index.html`, {
        waitUntil: "domcontentloaded"
    });

    const data = await page.evaluate(() => {
        return {
            title: document.title,
            cabecalho: document.querySelector('h1')?.innerText || 'cabecalho nao encontrado',
            text: document.querySelector('p')?.innerText || 'conteudo nao encontrado'
        };
    });

    await browser.close();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`server running in http://localhost:${PORT}`);
});