import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SelectedPlayers from "../components/SelectecPlayers/SelectedPlayers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/selected-players",
    element: <SelectedPlayers />,
  },
]);

export default router;