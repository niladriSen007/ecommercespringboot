import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import { lazy } from "react"
import ProductsPage from "./pages/ProductsPage"
const Footer = lazy(() => import("./components/shared/Footer"))
const HomePage = lazy(() => import("./pages/HomePage"))
const Navbar = lazy(() => import("./components/shared/Navbar"))

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path:"/products",
          element : <ProductsPage />
        }
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
