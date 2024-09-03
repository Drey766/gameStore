import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './assets/components/contextApi/StateProvider'
import reducer, { initialState } from './assets/components/contextApi/reducer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
)
