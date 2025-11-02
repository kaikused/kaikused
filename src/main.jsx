import { Buffer } from 'buffer'; // <-- ¡AÑADE ESTA LÍNEA!
window.Buffer = Buffer; // <-- ¡AÑADE ESTA LÍNEA!
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. Importa el BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envuelve tu <App /> con él */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)