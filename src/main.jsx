import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CoinContextProvider from './components/Context/context';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinContextProvider>
    <App />

    </CoinContextProvider>
  </StrictMode>,
)
