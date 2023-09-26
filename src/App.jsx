import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivity } from './redux/slices/activitySlice';

function App() {
  const dispatch = useDispatch();
  const { activity } = useSelector((state) => state.activity);

  useEffect(() => {
    dispatch(fetchActivity());
  }, []);
  return (
      <div className="App">
        <h1>{activity.activity}</h1>
      </div>
  );
}

export default App;
