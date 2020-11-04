import {fork,all} from 'redux-saga/effects';
import rootTodoSaga from './todo/todo-saga';

export default function* rootSaga(){
  yield all([fork(rootTodoSaga)])
}