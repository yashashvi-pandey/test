import { createStore } from 'redux';

import rootReducer from './Counter/reducer';


const store = createStore(rootReducer);


export default store;