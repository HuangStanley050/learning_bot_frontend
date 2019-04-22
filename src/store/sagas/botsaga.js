import { takeEvery, put } from "redux-saga/effects";
import * as actionType from "../actions/actionTypes";
import axios from "axios";
import { text_query_success, event_query_success } from "../actions/actions";
const API = {
  text: "http://localhost:8080/api/chatbot/text",
  event: "http://localhost:8080/api/chatbot/event"
};

function* botQueryWorkerSaga(action) {
  //console.log(action);
  try {
    let result = yield axios.post(API.text, action.query);
    let messages = result.data.fulfillmentMessages;
    let wikiInfo = result.data.wikiInfo;
    let temp = { ...messages[0] };
    temp.wikiInfo = wikiInfo;

    yield put(text_query_success(temp));
  } catch (e) {
    console.log(e);
  }
}

function* botEventWorkerSaga(action) {
  try {
    let result = yield axios.post(API.event, action.event);
    let messages = result.data.fulfillmentMessages;
    let wikiInfo = result.data.wikiInfo;
    let temp = { ...messages[0] };
    temp.wikiInfo = wikiInfo;
    console.log(temp);
    yield put(event_query_success(temp));
    //console.log(result);
  } catch (e) {
    console.log(e);
  }
}

function* botWatcherSaga() {
  yield takeEvery(actionType.START_TEXT_QUERY, botQueryWorkerSaga);
  yield takeEvery(actionType.START_EVENT_QUERY, botEventWorkerSaga);
}

export default botWatcherSaga;
