import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <h1>888888888</h1>
//     <Home/> 
//     <About/>
      
//     </>
//   )
// }

// export default App


let routes = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
