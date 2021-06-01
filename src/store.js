import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// export const addToDo = createAction("ADD"); // addToDo(text) 이렇게 하면 text가 action.payload로 담겨져서 감
// export const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   // createReducer을 사용하면 state를 불변성있게 만들어줌. 그 전에는 state가 불변성이 없어서 새로운 걸 만들어서 반환했었음
//   // createReducer 은 새로운 state를 반환해도 되고 , 기존 state를 변경시켜도 된다.
//   [addToDo]: (state, action) => {
//     state.push({
//       text: action.payload,
//       id: Date.now(),
//     });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

// 위에처럼 createAction, createReducer로 해도 되고 아래처럼 createSlice로 해도됨

const toDos = createSlice({
  // createSlice는 액션생성함수, 리듀서를 둘다 만들어줌
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({
        text: action.payload,
        id: Date.now(),
      });
    },

    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDos.reducer }); // createStore 인데 미들웨어와 함께 스토어를 생성해줌 ( reduxDevTools가 내장되어 있음)

export const { addToDo, deleteToDo } = toDos.actions;

export default store;
