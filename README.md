## Introduction

`3DSIM WEB` is a 3D webgis prototype system built based on the self-designed **"3DSIM conceptual model"**. It is developed using mainstream technologies such as `Vue3`, `Vite5`, and `TypeScript`, and can be used for learning and reference. The core code for `3DSIM` design still needs to be optimized and is awaiting open source.

## Features

- **State-of-art Techinical Stack**：Using the latest and popular front-end technology such as Vue3/vite2
- **TypeScript**: Application-level JavaScript language
- **Component**: Extracted and encapsulated components for various scenarios.
- **3D Visualization**: Utilizing advanced techniques for 3D visualization, enabling immersive and interactive experiences within the web GIS system.
- **Geospatial Data Handling**: Efficiently managing geospatial data, including complex geometries, raster data, and attribute information, to provide accurate and comprehensive representations of geographic features.
- **Interactivity**: Implementing interactive features such as zooming, panning, rotation, and selection, allowing users to explore and interact with 3D maps and spatial data effectively.
- **Performance Optimization**: Employing optimization techniques to ensure smooth performance and fast rendering, even with large-scale and complex 3D scenes and datasets.

## Preview

![image-20240405154029887](https://cdn.jsdelivr.net/gh/binwenwu/picgo_demo/img/20240405154023.png)

## Use Gitpod

Open the project in Gitpod (free online dev environment for GitHub) and start coding immediately.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/anncwb/vue-vben-admin)

## Preparation

- [node](http://nodejs.org/) and [git](https://git-scm.com/) - Project development environment
- [Vite](https://vitejs.dev/) - Familiar with vite features
- [Vue3](https://v3.vuejs.org/) - Familiar with Vue basic syntax
- [TypeScript](https://www.typescriptlang.org/) - Familiar with the basic syntax of `TypeScript`
- [Es6+](http://es6.ruanyifeng.com/) - Familiar with es6 basic syntax
- [Vue-Router-Next](https://next.router.vuejs.org/) - Familiar with the basic use of vue-router
- [Ant-Design-Vue](https://antdv.com/docs/vue/introduce-cn/) - ui basic use

## Install and use

- Get the project code

```bash
git clone https://github.com/binwenwu/3DSIM_WEB.git
```

- Install dependencies

```bash
cd 3DSIM_WEB

npm install
```

- Local operation

```bash
npm run dev
```

- Build

```bash
npm run build
```

## How to contribute

You are very welcome to join！[Raise an issue](https://github.com/binwenwu/3DSIM_WEB/issues) or submit a Pull Request.

**Pull Request:**

1. Fork code!
2. Create your own branch: `git checkout -b feat/xxxx`
3. Submit your changes: `git commit -am 'feat(function): add xxxxx'`
4. Push your branch: `git push origin feat/xxxx`
5. submit:`pull request`

## Git Contribution submission specification

- reference [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` Add new features
  - `fix` Fix the problem/BUG
  - `style` Modify the code style/format that does not affect the feature
  - `perf` Optimization/performance improvement
  - `refactor` Refactor
  - `revert` Undo edit
  - `test` Test related
  - `docs` Documentation/notes
  - `chore` Dependency update/scaffolding configuration modification etc.
  - `workflow` Workflow improvements
  - `ci` Continuous integration
  - `types` Type definition file changes
  - `wip` In development

## Browser support

The `Chrome 80+` browser is recommended for local development

Support modern browsers, doesn't include IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                         not support                          |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |

## Maintainer

[@Binwen Wu](https://github.com/binwenwu)

## License

[MIT © Tankenqi-2023](./LICENSE)
