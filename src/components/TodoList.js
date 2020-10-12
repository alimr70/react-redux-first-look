import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "../redux/actions/authActions";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      {auth.isLogged ? (
        <>
          <h3>You are Logged In</h3>
          <h3>Your Todos</h3>
          {todos.map((todoItem) => (
            <TodoItem todoItem={todoItem} />
          ))}
          <button
            onClick={() => {
              dispatch(authActions.logOut());
            }}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <h3>You are NOT Logged In, Pls LogIn</h3>
          <button
            onClick={() => {
              dispatch(authActions.logIn());
            }}>
            Log In
          </button>
        </>
      )}
    </>
  );
};

export default TodoList;
