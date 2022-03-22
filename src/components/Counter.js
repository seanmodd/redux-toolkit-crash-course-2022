import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
  incrementByAmount,
} from '../redux/features/counter.feature';

const CounterRedux = () => {
  const dispatch = useDispatch();

  // get data from Redux Store
  const counterState = useSelector((state) => state.counter);
  const { count } = counterState;
  const [counter, setCounter] = useState(0);

  const clickIncr = () => {
    dispatch(increment());
  };

  const clickDecr = () => {
    dispatch(decrement());
  };

  const clickIncrBy = () => {
    dispatch(incrementBy(5));
  };
  const clickIncrByAmnt = () => {
    // const clickIncrByAmnt = (e) => {
    // console.log('this is e: ', e);
    console.log('this is counter: ', counter);
    console.log('this is counter: ', typeof counter);
    dispatch(incrementByAmount(parseInt(counter)));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <p className="h3 text-primary">Counter with Redux</p>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="h3 display-3">{count}</p>s
              <button onClick={clickIncr} className="m-1 btn btn-success">
                Increment
              </button>
              <button onClick={clickDecr} className="m-1 btn btn-warning">
                Decrement
              </button>
              <button onClick={clickIncrBy} className="m-1 btn btn-danger">
                Increment by 5
              </button>
              <form>
                <input
                  type="number"
                  className="form-control"
                  onChange={(event) => setCounter(event.target.value)}
                  value={counter}
                />
                <button
                  type="submit"
                  onClick={(event) => {
                    event.preventDefault();
                    clickIncrByAmnt();
                    // clickIncrByAmnt(counter);
                  }}
                  className="m-1 btn btn-success"
                >
                  Increment by Amount
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterRedux;
