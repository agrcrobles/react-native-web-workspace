# react-native-web-workspace

An minimum boilerplate that has configured a native app running also on the web in the same monorepo. For a thorough discussion, please read the following blog post about developing [a cross platform app with react in a monorepo](https://blog.hellojs.org/a-cross-platform-app-with-react-in-a-monorepo-9c6aa6aed818)

> This has been done as an experiment and it is in an early stage, comments and feedback welcome!

## Overview
This boilerplate attempts to make another step in order to have it by using react-native and react-native-web in different package.json files.

## Quick start

```sh
git clone --depth 1 https://github.com/agrcrobles/react-native-web-workspace
```

### Lerna
lerna in independent versioning module is used to handle dependencies and speed up the development while splitting the platform from the code

```sh
yarn
yarn bootstrap
# it installs symlinks
```
### react-navigation-playground and components folder

These standalone libraries contain the main app shared among platforms. This is not transpiled ( TBD ), it has `react-native` and `react-navigation` as peerDependencies and a utils module symlinked.

### Run the app with haul using react-native-cli

```sh
cd mobile
yarn start -- --platform android
react-native run-android
# on android

yarn start -- --platform ios
react-native run-ios
# on ios
```

### Run the web in development server
```sh
cd web
yarn web
```
Project is running at http://localhost:3000/

## License

[MIT](https://github.com/agrcrobles/react-native-web-workspace/blob/master/LICENSE)
[BSD 2-clause notice](https://github.com/agrcrobles/react-native-web-workspace/blob/master/react-navigation-playground/LICENSE)

