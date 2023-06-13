## React template with Node.js

### How to start server

`yarn start`

### How is it working

1. Build application from `./src/index.tsx` file
2. Create bundle.js and put it into dist folder with index.html template based on `template.html`
3. Node.js reads yaml config `./config/local.yaml`
4. Node.js replace link for the script in `./dist/index.html` file based on protocol, serverName, port and bundleUrl
5. Node.js start server, return pages based on config.pagesUrl and return scripts based on config.bundleUrl
