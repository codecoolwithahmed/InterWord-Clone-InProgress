import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
  // Link,
  BrowserRouter,
} from "react-router-dom";
// import Home from '../../Pages/Home'
// import About from '../../Pages/About'
// import Profile from '../../Pages/Profile'
// import Product from '../../Pages/Product'
// import NotFound from "../../Pages/SocialMedia";
import SocialMedia from "../../Pages/SocialMedia";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);


export default function AppRouter() {
  return <>
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<Home/>}/> */}
    {/* <Route path="profile" element={<Profile/>}/> */}
    <Route path="socialmedia" element={<SocialMedia/>}/>
    {/* <Route path="product/:id" element={<Product/>}/> */}
    {/* <Route path="*" element={<NotFound/>}/> */}
  </Routes>
  </BrowserRouter>
  </>
}
