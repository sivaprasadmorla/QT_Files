import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/Store.js'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
<Provider store={store}>
<App/>
</Provider>

  
 </BrowserRouter>,
)
