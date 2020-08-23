import React, { useState } from "react";
import { connect } from "react-redux";

function Counter(props) {
  const [counter, setCounter] = useState();

  return (
    <div className="App">
      <div style={{ fontSize: "20px" }}>{props.counter}</div>
      <button onClick={() => setCounter(props.dispatch({ type: "INCREMENT" }))}>
        Increment
      </button>
      <button onClick={() => setCounter(props.dispatch({ type: "DECREMENT" }))}>
        Decrement
      </button>
    </div>
  );
}

const matchStateToProps = (state) => ({
  counter: state.counter,
});
export default connect(matchStateToProps)(Counter);
