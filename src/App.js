import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Info from './Pages/Info';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/info",
        element: <Info />,
      },

    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
