import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "../actions";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counterReducers);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter - Redux Saga Flow Example</h1>
      <button onClick={() => dispatch(incrementAction(1))}>
        Increment + 1
      </button>
      <button onClick={() => dispatch(decrementAction(1))}>
        Decrement - 1
      </button>
      {counter.loading ? <div>loading</div> : <div>Count: {counter.value}</div>}
    </div>
  );
};

export default CounterComponent;
