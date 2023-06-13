startServer = (port, pagesUrl, bundleUrl) => {
    const app = require('express')();
    const path = require('path');

    app.get(pagesUrl, (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });

    app.get(bundleUrl, (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/bundle.js'));
    });

    app.listen(port);
}

exports.startServer = startServer;
