import { useEffect, useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  INITIAL_STATE,
  fetchUserFailure,
  fetchUserSuccess,
  userReducer,
} from './reducer/user.reducer';
import { fetchUsers } from './services/user.services';

function App() {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { loading, error, users = [] } = state;

  const getUser = async () => {
    dispatch(fetchUsers());
    try {
      const users = await fetchUsers();
      setTimeout(() => {
        dispatch(fetchUserSuccess(users));
      }, 4000);
    } catch (error) {
      dispatch(fetchUserFailure(error?.message));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>ERROR: {error}</h1>;
  }

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
