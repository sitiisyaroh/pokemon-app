import { createBrowserRouter } from "react-router";
import Layout from "../layout";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Catch from "../pages/catch";
import MyPokemon from "../pages/myPokemon";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Detail />,
        path: "/detail/:name",
      },
      {
        element: <Catch />,
        path: "/catch",
      },
      {
        path: "/my-pokemon",
        element: <MyPokemon />,
      },
    ],
  },
]);
