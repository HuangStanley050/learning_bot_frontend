import * as actionType from "./actionTypes";

export const record_user_msg = msg => {
  return {
    type: actionType.STORE_USER_MESSAGE,
    msg
  };
};

export const start_text_query = query => {
  return {
    type: actionType.START_TEXT_QUERY,
    query
  };
};

export const text_query_success = msg => {
  //console.log(msg);
  return {
    type: actionType.START_TEXT_QUERY_SUCCESS,
    msg
  };
};

export const start_event_query = event => {
  return {
    type: actionType.START_EVENT_QUERY,
    event
  };
};

export const event_query_success = msg => {
  return {
    type: actionType.START_EVENT_QUERY_SUCCESS,
    msg
  };
};
