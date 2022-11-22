import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import Input from './components/Input/Input'
import Header from  './components/Header/Header.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <Header/>
    <App/>
    <Input/>
    <h3 className='header_h3'>Goychak Ahmadova</h3>
    <p>Now I can create react</p>
  </>
)
