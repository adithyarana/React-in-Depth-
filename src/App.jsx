import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import AppLayout from "./Layout";
import Body from "./components/Body";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import MenuPage from "./components/MenuPage";
import Cart from "./components/Cart.jsx";

// const h = React.createElement("h1", { id: "heading" }, "hello world from react");  // {} this object is used to give the attributes like id and class in this object

// const root = ReactDOM.createRoot(document.getElementById("root")); // this is the core react development stuff

// root.render(h);

// const parent = React.createElement("div", { id: "parent" },
//     [
//         React.createElement("div", { id: "children" }, [
//             [React.createElement("h1", {}, "i am h1 tag"),
//             React.createElement("h2", {}, "i am h2 tag")]
//         ]),

//         React.createElement("div", { id: "children" }, [
//             [React.createElement("h1", {}, "i am h1 tag"),
//             React.createElement("h2", {}, "i am h2 tag")]

//         ]),

//     ]);

// root.render(parent);

// this code become mess so we use jsx it helps to make the tags easy

// const jsxheadig = <h1>This is the jsx syntax</h1>
// console.log(jsxheadig);

// React components

// 1 class based components -> old
// 2 functionla based components -> new

// const Title = ()=> (
//     <h1>this is the normal js code this is the not the functional components</h1>

// )

// const Headingcomonent = () => {

//     return (
//         <div>
//             <h1>This is the functional components</h1>
//             {/* this is how we put react element in component */}
//             {/* we can also call the component like this  */}
//             {/* both are same */}
//             {Title()}
//             <Title/>
//         </div>

//     )
// }

const Grocery = lazy(() => import("./pages/Grocery")); // this is the lazy loding this is very important in code splitting
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId", // Dynamic routing
        element: <MenuPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
