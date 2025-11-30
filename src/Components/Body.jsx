import Browse from "./Browse";
import Login from "./Login";
import Signup from "./Signup";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appLayout = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appLayout} />;
};

export default Body;
