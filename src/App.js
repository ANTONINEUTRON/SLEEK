import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Publish from "./pages/Publish";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/publish" element={<Publish />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
