import React, { Component } from 'react';
import { } from 'react-native';
import AppNavigator from './src/routers/AppNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}