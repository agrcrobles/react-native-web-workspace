// @flow

import React from 'react';

import { AppRegistry } from 'react-native';

import MyApp from 'react-navigation-playground';

const renderApp = () => <MyApp />

AppRegistry.registerComponent('Linking', () => renderApp);

AppRegistry.runApplication('Linking', {
  rootTag: document.getElementById('root')
});
