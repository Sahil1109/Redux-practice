import React, { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./actions";

function Counter(props) {
  const [counter, setCounter] = useState();

  return (
    <div className="App">
      <div style={{ fontSize: "20px" }}>
        {props.counter}
        {/* Now it's double: {props.counter_two} */}
      </div>
      <button onClick={() => setCounter(props.increment())}>Increment</button>
      <button onClick={() => setCounter(props.decrement())}>Decrement</button>
      <button onClick={() => setCounter(props.reset())}>RESET</button>
    </div>
  );
}

const matchStateToProps = (state) => ({
  counter: state.counter,
  // counter_two: state.counter_two,
});

const matchDispatchToProps = {
  increment,
  decrement,
  reset,
};
export default connect(matchStateToProps, matchDispatchToProps)(Counter);
