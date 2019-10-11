import { createStore } from 'redux';
import { Reducers } from '../reducers';

export const Store = createStore(Reducers); // criamos a store e dizemos quais sao seus reducers