import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import NewBookmarkPage from "./pages/NewBookmarkPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PublicPage from "./pages/PublicPage";
import EditBookmarkPage from "./pages/EditBookmarkPage";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LogInPage />
        </PublicRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <RegisterPage />
        </PublicRoute>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>
      ),
    },
    {
      path: "/new-bookmark",
      element: (
        <PrivateRoute>
          <NewBookmarkPage />
        </PrivateRoute>
      ),
    },
    {
      path: "/edit-bookmark/:bookmarkId",
      element: (
        <PrivateRoute>
          <EditBookmarkPage />
        </PrivateRoute>
      ),
    },
    {
      path: "/public",
      element: (
        <PrivateRoute>
          <PublicPage />
        </PrivateRoute>
      ),
    },
  ];

  return (
    <>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </main>
    </>
  );
};

export default App;
