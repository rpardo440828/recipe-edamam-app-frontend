import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Recipes from './pages/Recipes/Recipes';
import Instruct from './pages/Recipes/IndvPage/Instuct';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/recipes",
        element: <Recipes />
      },
      {
        path: `/recipes/:id`,
        element: <Instruct />
      },
    ]
  },
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
       <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
