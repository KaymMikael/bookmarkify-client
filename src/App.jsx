import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
