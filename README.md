# JavaScript Scripts

## Install

### ⚠️ Requirements

- zsh
- nvm

```shell
curl -o- https://raw.githubusercontent.com/johnlindquist/.js/main/install.sh | zsh
```

## Create a New Script

```shell
js-new my-script
```

⚠️ This step relies on VS Code being installed
This will create a new `.mjs` file in your `src` dir, [symlink](https://en.wikipedia.org/wiki/Symbolic_link) it, and launch the file to edited in [VS Code](https://code.visualstudio.com/).

Write some JavaScript in your `my-script.js` file, then you can run it in the terminal with `my-script`.
