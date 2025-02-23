import './App.css'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import Home from './pages/Home'
import AppLayout from './component/Layout/AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './component/Layout/CountryDetails'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[{
         
          path:"/",
          element:<Home/>
          
          },
          {
            path:"about",
            element:<About/>

          },
          {
             path:"country",
             element:<Country/>
          },
          {
            path:"contact",
            element:<Contact/>
          },
          {
           path:"country/:id",
           element:<CountryDetails/>
          }
        ]
    }
  ])
   return (
    <>
    <RouterProvider router={router}>
   <h1>herllo</h1>
    </RouterProvider>
    </>
  )
}

export default App
