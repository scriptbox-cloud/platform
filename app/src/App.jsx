import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CodeEditor from './pages/Editor'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }, 
    {
      path: '/editor',
      element: <CodeEditor/>
    }, 
   
   
  ])

  return (
  


      <div>
      
      <RouterProvider router={router}/>
      
      </div>
      

    
  )
}

export default App;
