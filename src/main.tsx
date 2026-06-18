// Safe global.fetch setter hook for sandboxed iframe browsers
try {
  const originalFetch = window.fetch;
  let customFetch = originalFetch;
  Object.defineProperty(window, 'fetch', {
    get() { return customFetch; },
    set(val) { customFetch = val; },
    configurable: true,
    enumerable: true
  });
} catch (e) {
  // Safe fallback if defineProperty is not supported or fetch is already set
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
