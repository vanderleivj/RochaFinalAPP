import React from 'react';
import { StatusBar } from 'react-native';



import Routes from './routes';

//import { View } from 'react-native';

import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers/';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {
  return (

        <>
        <StatusBar barStyle= "dark-content" backgroundColor="#fff" />
        <Provider store={ store }>
            <Routes />
        </Provider>
       </>

       );
}
