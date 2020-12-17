import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers/RootReducer'
import thunk from 'redux-thunk'
import firebaseConfig from './config/FbConfig'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

  const store = createStore(RootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'user', attachAuthIsReady: true}), // redux binding for firebase
      reduxFirestore(firebaseConfig) // redux bindings for firestore
    )
  );

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
