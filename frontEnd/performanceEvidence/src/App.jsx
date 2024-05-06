import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./components/layouts/authentication/Login"
import Home from "./components/layouts/pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "Home",
    element: <Home />
  }
])


function App() {

  return (
    <> 
      <RouterProvider router={router} />
    </>
  )
}

export default App
