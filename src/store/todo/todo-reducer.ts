import { createReducer } from "@reduxjs/toolkit"
import {
  fetchAllTodoError,
  fetchAllTodoReq,
  fetchAllTodoSuccess,
} from "./todo-action"

export type TodoType = {
  id: number
  title: string
  completed: boolean
}

export interface ITodoState {
  todos: Array<TodoType>
  error: any
  ladoing: boolean
}

export const todoReducer = createReducer(
  { todos: [], error: null, ladoing: false } as ITodoState,
  (buidler) => {
    buidler
    // REQ
      .addCase(fetchAllTodoReq, (state, action) => {
        return {
          ...state,
          ladoing: true,
        }
      })
      // RESPSONE
      .addCase(fetchAllTodoSuccess, (state, action) => {
        return {
          ...state,
          todos: action.payload,
          ladoing: false,
        }
      })
      .addCase(fetchAllTodoError, (state, action) => {
        return {
          ...state,
          error: action.payload,
        }
      })
  }
)

// export const todoReducers:Reducer<ITodoState> =(state=stateTodo ,action)=>{
//   switch(action.type){
//       case ActionType.FETCH_TODO_REQ:
//         return{
//           ...state
//         }
//       case ActionType.FETCH_TODO_SUCCESS:
//         return{
//           ...state,
//           counter:counter+5

//         }
//       case ActionType.FETCH_TODO_ERROR:
//         return{
//           ...state,
//           error:action.data
//         }
//       default:
//        return state
//   }
// }
