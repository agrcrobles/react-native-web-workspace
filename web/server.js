const path = require('path');
const express = require('express');

const server = {

  app: () => {
    const app = express();
    const indexPath = path.join(__dirname, 'build/index.html');
    const publicPath = express.static(path.join(__dirname, 'build'));

    app.use('/', publicPath);
    app.get('/', (_, res) => {
      res.sendFile(indexPath);
    });
    return app;
  }
};

const port = (process.env.PORT || 8080);

const app = server.app();

app.listen(port);

console.log(`Listening at http://localhost:${port}`);

