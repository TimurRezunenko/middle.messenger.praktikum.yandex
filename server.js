const express = require('express');

const app = express();
const PORT = 3000;

const pages = [
    '404',
    '500',
    'chats',
    'chat',
    'login',
    'profile',
    'registration',
    'change-password',
];

app.get('/**', function (req, res, next) {
    if (pages.indexOf(req.url.slice(1)) === -1) {
        return next();
    }
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.use(express.static(`${__dirname}/dist`));

app.listen(process.env.PORT || PORT, () => {
    /* eslint no-console: 0 */
    console.log(`Listening to ${process.env.PORT || PORT}!`);
});
