/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import reducers from './src/reducers';

import RouterComponent from "./src/router"

import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
const store = createStore(reducers, applyMiddleware(thunk));



const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <RouterComponent/>
      </View>
    </Provider>
  );
};

export default App;