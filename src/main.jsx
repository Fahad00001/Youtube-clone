import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './Context/Authprovider.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { UtilsContextProvider } from './Context/Utilscontext.jsx'
// import { UtilscontextProvider } from './Context/Utilscontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Authprovider>
<App />
  </Authprovider>  
</BrowserRouter>
)
