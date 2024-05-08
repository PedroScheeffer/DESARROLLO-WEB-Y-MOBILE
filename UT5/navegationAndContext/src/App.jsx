import './App.css'

import NavigationExample from './pages/NavigationExample';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  // useNavigate and Link 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavigationExample />} path="/navigationExample" exact />
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
