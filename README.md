## seemingly a bug in [Svelte for VS Code][1] extension

### Setup

```bash
$ gh repo clone hyrious/vite-svelte-sass-bug
$ cd vite-svelte-sass-bug
$ npm install
$ code .
# then navigate to App.svelte to see the error on <style> tag
```

I've tried adding `/usr/local/bin/node` to `svelte.language-server.runtime` in
VS Code User Settings, but it didn't work.

Error message:

```
Cannot find any of modules: sass,node-sass

Error: Cannot find module 'node-sass'
Require stack:
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-preprocess/dist/modules/utils.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-preprocess/dist/autoProcess.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-preprocess/dist/index.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-language-server/dist/src/importPackage.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-language-server/dist/src/lib/documents/configLoader.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-language-server/dist/src/lib/documents/Document.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-language-server/dist/src/lib/documents/index.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-language-server/dist/src/server.js
- /Users/hyrious/.vscode/extensions/svelte.svelte-vscode-105.5.3/node_modules/svelte-language-server/bin/server.js

The file cannot be parsed because style requires a preprocessor that doesn't seem to be setup or failed during setup. Did you setup a `svelte.config.js`? If you use SCSS, it may be necessary to add the path to your NODE runtime to the setting `svelte.language-server.runtime`, or use `sass` instead of `node-sass`. 

See https://github.com/sveltejs/language-tools/tree/master/docs#using-with-preprocessors for more info.
```

[1]: https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode
