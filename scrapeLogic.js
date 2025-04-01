module.exports = async (page, url) => {
  // Authenticate with proxy
  await page.authenticate({
    username: 'your_smartproxy_username',
    password: 'your_smartproxy_password'
  });

  // Rotate user agent
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_2_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15",
    "Mozilla/5.0 (Linux; Android 11; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; rv:122.0) Gecko/20100101 Firefox/122.0"
  ];
  const randomUA = userAgents[Math.floor(Math.random() * userAgents.length)];
  await page.setUserAgent(randomUA);
  await page.setExtraHTTPHeaders({ 'accept-language': 'en-US,en;q=0.9' });

  // Go to the URL
  await page.goto(url, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const html = await page.content();
  return { url, html };
};
