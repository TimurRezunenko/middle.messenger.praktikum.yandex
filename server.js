const express = require('express');

const app = express();
const PORT = 3000;

app.use('/', () => express.static(`${__dirname}/index.html`));

app.listen(PORT, function() {
    console.log(`The app is running on port ${PORT}`);
});
