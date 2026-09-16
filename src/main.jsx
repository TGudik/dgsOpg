import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from "./Routes"
import "@fontsource/just-another-hand";
import "@fontsource/kurale";
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={routes}/>
    </StrictMode>
  </AuthProvider>
)
