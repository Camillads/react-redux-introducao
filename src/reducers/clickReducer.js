import { CLICK_UPDATE_VALUE } from "../actions/actionTypes";

// Aqui definimos qual será a chave do Reducer na Store quando quisermos acessar o seu estado,
// além de podermos combinar vários Reducers para serem conectados à Store (combineReducers).

// Este será o nosso Reducer que será acionado pela Action caso o type dela seja CLICK_UPDATE_VALUE,
// caso contrário manterá o estado atual.

// Conseguimos preservar o restante do estado usando o ...state,
// que recupera o estado anterior e passa para o novo objeto.

const initialState = {
    newValue: 'Atualizado via redux!'
  };
  export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLICK_UPDATE_VALUE:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };