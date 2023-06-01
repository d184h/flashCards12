const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}

module.exports = Layout;
