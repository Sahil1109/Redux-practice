import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";
const intialState = {
  counter: 0,
};
function reducer(state = intialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
