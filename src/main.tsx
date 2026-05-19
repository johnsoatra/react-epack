import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestList from './pages/TestList.tsx'
import TestCard from './pages/TestCard.tsx'
import TestLine from './pages/TestLine.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='p-7.5'>
      <TestLine />
    </div>
  </StrictMode>,
)
