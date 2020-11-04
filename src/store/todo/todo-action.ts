import {createAction} from '@reduxjs/toolkit';
import { TodoType } from './todo-reducer';


export enum ActionType{
  FETCH_TODO_REQ='FETCH_TODO_REQ',
  FETCH_TODO_SUCCESS='FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR='FETCH_TODO_ERROR'

}








// TRIGGER TO API
export const fetchAllTodoReq=createAction(ActionType.FETCH_TODO_REQ);

// ONLY GET DATA 
export const fetchAllTodoSuccess=createAction<TodoType[]>(ActionType.FETCH_TODO_SUCCESS);

// WHEN SOMETHING WHEN WRONG 404 500
export const fetchAllTodoError=createAction<any>(ActionType.FETCH_TODO_ERROR );