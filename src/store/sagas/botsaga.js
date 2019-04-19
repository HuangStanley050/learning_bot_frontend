import { takeEvery, put } from "redux-saga/effects";
//import * as actionType from "../actions/actionTypes";
import axios from "axios";
//import API from "../../API/apiCalls";
//import { text_query_success, event_query_success } from "../actions/botActions";



function* botWatcherSaga() {
  // yield takeEvery(actionType.START_TEXT_QUERY, botQueryWorkerSaga);
  // yield takeEvery(actionType.START_EVENT_QUERY, botEventWorkerSaga);
};

export default botWatcherSaga;