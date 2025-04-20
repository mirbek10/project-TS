import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import { myStore } from './store/store';
import './index.css'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </StrictMode>,
)
