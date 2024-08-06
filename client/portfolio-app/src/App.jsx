/* eslint-disable no-unused-vars */
import Error from "./components/Error";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { loader as projectLoader } from "./components/ProjectAll";
import ProjectItem, { loader as projectItemLoader } from "./pages/ProjectItem";
import "./styles/main.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Navigate replace to="home" /> },
      { path: "/home", element: <Home />, loader: projectLoader },
      { path: "/projects", element: <Project />, loader: projectLoader },
      {
        path: "/projects/:projectId",
        element: <ProjectItem />,
        loader: projectItemLoader,
      },
      { path: "/about", element: <About /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
