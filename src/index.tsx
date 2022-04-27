import { createRoot } from 'react-dom/client';
import App from './App';
import { StoreContext, store } from './app/stores/store';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StoreContext.Provider value={store}>
    <Router >
      <App  />
    </Router>
  </StoreContext.Provider>
);
