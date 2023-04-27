import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
