import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Routes from './routes/Routes'
export const routes = createBrowserRouter(Routes)

function App() {


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
