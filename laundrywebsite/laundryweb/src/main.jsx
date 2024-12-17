import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // Ganti dari BrowserRouter ke HashRouter
import App from './App.jsx'
import './index.css'
// library bootstrap jgn di hapus!!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* HashRouter digunakan di sini */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)
