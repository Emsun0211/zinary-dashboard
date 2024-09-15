
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Layout from './layouts/Layout'


function App(){
  const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/dashboard',
      element: <Dashboard />
    }
    ]
  }
])

  return <RouterProvider router={router} />
}


export default App
