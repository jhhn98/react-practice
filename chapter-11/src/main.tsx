import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!, {
  onCaughtError: (error, errorInfo) => {
    console.info('Caught error', error, errorInfo.componentStack)
  },
  onUncaughtError: (error, errorInfo) => {
    console.info('Uncaught error', error, errorInfo.componentStack)
  },
  onRecoverableError: (error, errorInfo) => {
    console.info('Recovery error', error, errorInfo.componentStack)
  },
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
