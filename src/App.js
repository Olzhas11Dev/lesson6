import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Documentation from "./components/Documentation";
import Crud from "./components/Crud";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/crud" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
