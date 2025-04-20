import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./index.css";
import PageRouter from "./Pages/PageRouter/PageRouter";
import Home from "./Pages/Home/Home";
import ShowBubbles from "./Pages/Bubbles/Bubbles";
import Navbar from "./Components/Navbar/Navbar";
import Todo from "./Pages/TodoList/Todo";
import Music from "./Pages/MusicWeb/Music";
import Dragonball from "./Pages/Dragonball/Dragonball-Page";
// import BookFinder_WithGoogle from "./Pages/BookFinder/BookFinder_WithGoogle";
import Pokemon_page from "./Pages/Pokemon/Pokemon_page";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Outlet />
    </>
  );
};

const router = createHashRouter(
  [
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
        // { path: "/bookfinder", element: <BookFinder_WithGoogle /> },
        // { path: "*", element: <Home /> }, // Catch-all route (optional)
      ],
    },
  ]
  // {
  //   basename: "/Portfolioreact", // ✅ this is the correct place
  // }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
