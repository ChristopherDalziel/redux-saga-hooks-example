import { useSelector, useDispatch } from "react-redux";
import CounterComponent from "../components/CounterComponent";

const CounterContainer = () => {
  const counter = useSelector((state) => state.counterReducers);

  const dispatch = useDispatch();

  return <CounterComponent counter={counter} dispatch={dispatch} />;
};

export default CounterContainer;
