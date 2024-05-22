import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";
const app = express();
const PORT = 3000;

app.use(express.static("build"));
app.get("*", (req, res) => {
  const appString = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR + Express </title>
    </head>
    <body>
      <div id="root">${appString}</div>
      <script src="client.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
