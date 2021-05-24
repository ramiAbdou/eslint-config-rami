# ESLint/Prettier Configuration

An opinionated ESLint configuration that extends AirBnB's ESLint configuration.

# Installation

1. To install the package, run:

`npm i -D eslint-config-rami`

2. To install the peer dependencies of the package, run:

`npx install-peerdeps --dev eslint-config-rami`

3. You will see several dependencies were installed. Now, create (or update) an `.eslintrc` file with the following content:

```js
{ 'extends': ['rami'] }
```

3. Copy the [.prettierrc](https://github.com/ramiAbdou/eslint-config-rami/blob/master/.prettierrc) file from this repository into your project folder.

---

This repository is inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera).
