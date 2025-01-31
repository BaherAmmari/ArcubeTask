import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { URLProvider } from './context/URLContext.tsx'
import 'antd/dist/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <URLProvider>
      <App />
    </URLProvider>
  </StrictMode>,
)
