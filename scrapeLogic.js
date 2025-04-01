module.exports = async (page, url) => {
  // Authenticate with proxy
  await page.authenticate({
    username: 'your_smartproxy_username',
    password: 'your_smartproxy_password'
  });

  // Rotate user agent for realism
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0...)',
    // Add more
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
