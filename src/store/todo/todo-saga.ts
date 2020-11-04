import { takeLatest, all, fork, call, put } from "redux-saga/effects"
import { ActionType,fetchAllTodoSuccess } from "./todo-action"
import { todoAsync } from "./todo-api"

function* todoSaga() {

  try {
    const res = yield call(todoAsync);
   yield put(fetchAllTodoSuccess(res))
  console.log(res)
  } catch (err) {
    console.log(err)
  }
}

function* watchTodoSaga() {
  yield takeLatest(ActionType.FETCH_TODO_REQ, todoSaga)
}

export default function* rootTodoSaga() {
  yield all([fork(watchTodoSaga)])
}
