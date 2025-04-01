# Puppeteer Scraper API With Proxy

A simple Node.js API built with Express and Puppeteer that scrapes the full HTML of a given webpage.

## How It Works

- **Endpoint:**  
  `GET /scrape?url=<target_url>`  
  Provide the target URL as a query parameter (URL-encoded).

- **Process:**  
  1. The server launches Puppeteer with necessary options for cloud deployment.
  2. It navigates to the provided URL and waits for the network to be idle.
  3. The full HTML content of the page is fetched and returned as the response.

## Deploying to Render.com

1. Push this repository to GitHub.
2. Create a new Web Service on [Render.com](https://render.com/) and connect your GitHub repository.
3. Render.com will detect the `package.json` file and install the dependencies automatically.
4. Set the start command to `npm start`.

## Usage

To scrape a webpage, send a GET request such as:

