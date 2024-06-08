import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Landing from './pages/Landing';
import Game from './pages/Game';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#312E2B]'>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Landing/>}
          />
          <Route
            path="/game"
            element={<Game/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
