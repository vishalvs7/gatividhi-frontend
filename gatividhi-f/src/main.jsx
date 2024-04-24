import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Router from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Router />} >
      <Route path='' element={<App />}/>
      <Route path='*' element= {<Error404 />} />

      {/* Vendors authentication */}

      <Route path='auth/VendorLogin' element={<LogInVendor />} />
      <Route path='auth/VendorRegister' element={<SignUpVendor />} />

      {/* Users Authentication */}

      <Route path='auth/Login' element={<LogInUser />} />
      <Route path='auth/Register' element={<SignUpUser />} />


      {/* Pages and general Routes */}
      





    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
