import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout.jsx'

// const router = createBrowserRouter([{
//   path:'/',
//   element: <Layout />
// }])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    
    <App />
  </StrictMode>
  </BrowserRouter>
)
