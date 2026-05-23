import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Test from './test/Test.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='p-7.5'>
      <Test />
      <div className='test text-white'>fff</div>
    </div>
  </StrictMode>,
);
