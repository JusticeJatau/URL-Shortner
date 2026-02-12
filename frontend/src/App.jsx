import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import RedirectPage from "./pages/RedirectPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/s/:token" element={<RedirectPage />} />
    </Routes>
  )
}

export default App
