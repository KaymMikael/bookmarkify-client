import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogInPage from "./pages/LogInPage";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
