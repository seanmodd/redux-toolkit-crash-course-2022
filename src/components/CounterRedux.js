import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
} from '../redux/features/counter.feature';

const CounterRedux = () => {
  const dispatch = useDispatch();

  // get data from Redux Store
  const counterState = useSelector((state) => state.counter);

  const { count } = counterState;

  const clickIncr = () => {
    dispatch(increment());
  };

  const clickDecr = () => {
    dispatch(decrement());
  };

  const clickIncrBy = () => {
    dispatch(incrementBy(5));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p className="h3 display-3">{count}</p>
              <button onClick={clickIncr} className="btn btn-success m-1">
                Increment
              </button>
              <button onClick={clickDecr} className="btn btn-warning m-1">
                Decrement
              </button>
              <button onClick={clickIncrBy} className="btn btn-danger m-1">
                Increment by 5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterRedux;
