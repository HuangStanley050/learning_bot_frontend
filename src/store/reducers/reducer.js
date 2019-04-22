import * as actionType from "../actions/actionTypes";

const initialState = {
  messages: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_USER_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.msg]
      };
    case actionType.START_TEXT_QUERY_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.msg]
      };
    case actionType.START_EVENT_QUERY_SUCCESS:
      //console.log(action.msg);
      return {
        ...state,
        messages: [...state.messages, ...action.msg]
      };
    default:
      return state;
  }
};

export default reducer;
