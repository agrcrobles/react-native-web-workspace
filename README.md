# react-native-web-workspace

An minimum boilerplate that has configured a native app running also on the web in the same monorepo. For a thorough discussion, please read the following blog post about developing [a cross platform app with react in a monorepo](https://blog.hellojs.org/a-cross-platform-app-with-react-in-a-monorepo-9c6aa6aed818)

> This has been done as an experiment and it is in an early stage, comments and feedback welcome!

## Overview
This boilerplate attempts to make another step in order to have it by using react-native and react-native-web in different package.json files.

## Quick start

```
git clone --depth 1 https://github.com/agrcrobles/react-native-web-workspace
```

### Lerna
lerna it is used to hoist dependencies from a project root and speed up the development while splitting the platform from the code

```console
## it cleans node_modules
npm run clean
## it installs dependencies
npm install
## it installs symlinks
npm run bootstrap 
```

### More info
 - [react-native-web-workspace/navigation-playground](https://github.com/agrcrobles/react-native-web-workspace/tree/master/react-navigation-playground)
 - [react-native-web-workspace/web](https://github.com/agrcrobles/react-native-web-workspace/tree/master/web)
 - [react-native-web-workspace/mobile](https://github.com/agrcrobles/react-native-web-workspace/tree/master/mobile)

## Related projects

* [yarn-workspaces-cra-crna](https://github.com/viewstools/yarn-workspaces-cra-crna) explains how to use yarn workspaces with Create React App and Create React Native App (Expo) to share common code across.

## License

[MIT](https://github.com/agrcrobles/react-native-web-workspace/blob/master/LICENSE)

[BSD 2-clause notice](https://github.com/agrcrobles/react-native-web-workspace/blob/master/react-navigation-playground/LICENSE)

