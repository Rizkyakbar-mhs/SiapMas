import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const RootReducer = combineReducers({
    auth: AuthReducer,
    product: ProductReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default RootReducer;