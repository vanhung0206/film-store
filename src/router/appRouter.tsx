import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const appRouter = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      id: "main",
      path: "/",
      errorElement: <ErrorBoundary />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/film-store",
  }
);

export default appRouter;
