// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Theatre from '../src/component/Theatre';

// const App = () => {
//   const user = true;
//   return (<Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </Router>);
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "Theatre",
//     element: <Theatre/>,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
    
//     <RouterProvider router={router}/>
//    </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import TheatrePage from "./pages/Theatre.page";
import MvePage from "./pages/Mve.page";
import PaymentPage from "./pages/Payment.page";
import reportWebVitals from "./reportWebVitals";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Theatre",
    element: <TheatrePage />,
  },
  {
    path: "Mvepage",
    element: <MvePage />,
  },
  {
    path: "Paymentpage",
    element: <PaymentPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();