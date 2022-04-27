import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, useLocation, useNavigate } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../src/app/stores/store';

import './App.css';

function App() {

  const history = useNavigate();
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <Route element='' path='/'/>
    </>
  );
}

export default observer(App);