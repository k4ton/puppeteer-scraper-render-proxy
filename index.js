const express = require("express");
const puppeteer = require("puppeteer");
const scrapeLogic = require("./scrapeLogic.js");

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/scrape", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("Missing ?url query parameter");
  }

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox', '--disable-setuid-sandbox', '--proxy-server=YOUR_PROXY_SERVER',
        ]
    });

    const page = await browser.newPage();
    const result = await scrapeLogic(page, url);
    await browser.close();
~
    res.json(result);
  } catch (err) {
    res.status(500).send(`Puppeteer error: ${err.message}`);
  }
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`✅ Listening on port ${PORT}`);
});
