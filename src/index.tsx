import { createRoot } from 'react-dom/client';
import App from './app/layout/App';
import 'react-toastify/dist/ReactToastify.min.css';
import { StoreContext, store } from './app/stores/store';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <>
  <StoreContext.Provider value={store}>
    <Router >
      <App  />
    </Router>
  </StoreContext.Provider>
  </>
);
