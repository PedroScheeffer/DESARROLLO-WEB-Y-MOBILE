import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import SportDetails from "./pages/sportDetails";
import NewSport from "./pages/newSport";

function App() {
  // useNavigate and Link 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<SportDetails />} path="/games/:taskId" />
        {/* <Route element={<NewSport />} path="/newSport"/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App