import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './componenta/Home/Home'
import About from './componenta/About/About'
import Contact from './componenta/Contact/Contact'
import User from './componenta/User/User'
import Github ,{githubInfoLoader}from './componenta/Github/Github'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
    {
      path:"/About",
      element:<About/>
    },{
      path:"/Contact",
      element:<Contact/>
    },
    {
      path:"/user/:userid",
      element:<User />
    },{
      loader:githubInfoLoader,
      path:"/Github",
      element:<Github />
    }
  ]
  }
]) 


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
//       loader={githubInfoLoader}
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
