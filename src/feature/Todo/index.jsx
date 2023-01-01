import React, { useEffect, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";
import TodoItem from "./components/TodoItem";

Todo.propTypes = {};
const initState = {
  job: "",
  jobs: [],
};
// constant action
const TODO_TYPING = "typing";
const TODO_ADD = "add";
const TODO_CLEAR = "clear";
//
const todo_typing = (payload) => {
  return {
    payload,
    type: TODO_TYPING,
  };
};
const add_todo = (payload) => {
  return {
    payload,
    type: TODO_ADD,
  };
};
const clear_todo = (payload) => {
  return {
    payload,
    type: TODO_CLEAR,
  };
};
const reducer = (state, action) => {
  switch (action.type) {
    case TODO_TYPING:
      return {
        ...state,
        job: action.payload,
      };
      break;
    case TODO_ADD:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case TODO_CLEAR:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: [...newJobs],
      };
      break;
    default:
      throw new Error("invalid action");
  }
};
function Todo(props) {
  const typingE = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const handelAdd = () => {
    dispatch(add_todo(job));
    dispatch(todo_typing(""));
    typingE.current.focus();
  };
  const handelClear = (payload) => {
    dispatch(clear_todo(payload));
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Todo app</h1>
      <input
        ref={typingE}
        placeholder="enter todo"
        value={job}
        onChange={(e) => dispatch(todo_typing(e.target.value))}
      />
      <button onClick={handelAdd}>Add</button>
      <h2>Todo list</h2>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            <TodoItem todoItem={item} index={index} onClear={handelClear} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
