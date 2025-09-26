import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/dynamicpages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ProductCategory from "./pages/dynamicpages/ProductCategory";
import AboutPage from "./pages/Home/AboutPage";
import ProductsPage from "./pages/Home/ProductsPage";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/authpages/Login";
import Register from "./pages/authpages/Register";
import ProductLayout from "./layouts/ProductLayout";
import CartPage from "./pages/Home/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "cart",
          element: <CartPage/>,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/products",
      element: <ProductLayout />,
      children: [
        {
          index: true,
          element: <ProductsPage />,
        },
        {
          path: "detail/:id",
          element: <ProductDetail />,
        },
        {
          path: ":category",
          element: <ProductCategory />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
