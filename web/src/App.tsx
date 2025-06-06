import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }, 
   
   
  ])

  return (
  


      <div>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer/>
      </div>
      

    
  )
}

export default App;
