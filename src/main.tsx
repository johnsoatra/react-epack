import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='p-7.5'>
      <App />
    </div>
  </StrictMode>,
)
