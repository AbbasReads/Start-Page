import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Setup from './routes/Setup'
import Home from './routes/Home'

const router=createBrowserRouter(
  createRoutesFromElements(
    // <Route path='/' >
    //   <Route path='/setup' element={<Setup/>}/>
    //   <Route path='/home' element={<Home/>}/>
    // </Route>
    <>
    <Route index element={<Home/>}></Route>
    <Route path='/setup' element={<Setup/>}></Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
