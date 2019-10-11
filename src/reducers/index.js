import { clickReducer } from './clickReducer';
//import { OtherReducer } from './otherReducer';
import { combineReducers } from 'redux';

// definição e criação dos reducers da aplicação
export const Reducers = combineReducers({ //  função pura que filtra os dados e que criaremos adiante
    clickState: clickReducer,
   // otherState: otherReducer
});