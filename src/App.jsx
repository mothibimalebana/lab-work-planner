import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
    <div className="app">
      <div className="navbar px-[5rem] py-[0.25rem] bg-[#021E35]">
        <Navbar />
      </div>
      <div className="content px-[5rem]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
    </>
  )
}

export default App
