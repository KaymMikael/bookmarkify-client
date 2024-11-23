import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LogInPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardPage />,
    },
  ];

  return (
    <>
      <main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path}/>
          ))}
        </Routes>
      </main>
    </>
  );
};

export default App;
