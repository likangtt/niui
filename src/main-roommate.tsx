import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageVariantContext } from './pageVariant';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageVariantContext.Provider value="roommate">
      <App />
    </PageVariantContext.Provider>
  </StrictMode>
);