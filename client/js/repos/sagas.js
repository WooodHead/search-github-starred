import { takeEvery } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
// import { ActionTypes } from '../actions/deviceAction';
import FetchingStatus from './constants';

import actions from './actions';

const { getReposStatusSucceeded } = actions;

import {
  FETCH_STARRRED_STATUS,
} from './actionTypes';
// import { AppManager } from '../utils/AppManager.js';
// import { getRidAliasFromState } from '../reducers/selectors';
// import { fetchDevices } from '../actions/deviceAction.js';

// import {
//   tryDropResource,
//   tryDeleteSN,
// } from '../actions/tryExofetch.js';

// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Our worker Saga:
export function* fetchStatusAsync(action) {
  console.log('into fetch statys middleware async');
// step 1
// async part, e.g. fetch
// const user = yield call(Api.fetchUser, action.payload.userId);
  // yield call(tryDropResource, rid);

// step 2
  yield put(getReposStatusSucceeded(FetchingStatus.FETCHED)); // or
// yield put({type: "USER_FETCH_SUCCEEDED", user: user});

  // }
}

// takeLatest : only one in the same time
// teakeEvery: simultaneously
// yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);

export function* watchFetchReposAsync() {
  yield* takeEvery(FETCH_STARRRED_STATUS, fetchStatusAsync);
}

export default [
  watchFetchReposAsync,
  // ...changeCreditCard.sagas,
];

// export function* helloSaga() {
//   console.log('Hello Sagas!');
// }