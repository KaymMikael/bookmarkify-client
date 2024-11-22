import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
