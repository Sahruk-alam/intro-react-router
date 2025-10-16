import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobile from './components/Mobiles/Mobile.jsx';
import laptop from './components/Laptops/laptop.jsx';
import User from './components/User/User.jsx';
import User2 from './components/users/User2.jsx';
import UserDetails from './components/users/userDetails/UserDetails.jsx';
const usersPromise=fetch('https://jsonplaceholder.typicode.com/users').then(
  res=>res.json()
);
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true,
       Component:Home 
      },
      {path:"Mobiles",
        Component:Mobile
      },
      {path:"/laptop",
        Component:laptop
      },
      {path:"user",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component:User
      },
      {
        path:"/Users2",
        element: <Suspense fallback={<div>Loading...</div>}>
          <User2 usersPromise={usersPromise}></User2>
          </Suspense>
      },
      {
        path: "users1/:userId",
        Component: UserDetails
      }
    ]
  },
  {
    path:"/about",
    element: <div>About Us</div>
  },
  {
    path:"/apps",
    element: <App />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
