import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import PageRouter from "./Pages/PageRouter";
import Home from "./Pages/Home";
import ShowBubbles from "./Pages/Bubbles";
import Todo from "./Pages/Todo";
import Music from "./Pages/Music";
import Dragonball from "./Pages/Dragonball";
import Chess from "./Pages/Chess";
import Pokemon_page from "./Pages/Pokemon";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/pagerouter", element: <PageRouter /> },
      { path: "/bubbles", element: <ShowBubbles /> },
      { path: "/todo", element: <Todo /> },
      { path: "music", element: <Music /> },
      { path: "/dragonball", element: <Dragonball /> },
      { path: "/pokemon", element: <Pokemon_page /> },
      { path: "/chess", element: <Chess /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
