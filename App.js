import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import BusRoutes from './components/BusRoutes';
import Buses from './components/Buses';
import BusStop from './components/BusStop';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import content components (if applicable)

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Render navbar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path='/BusRoutes' element={<BusRoutes />} />
            <Route path='/BusStop' element={<BusStop />} />
            <Route path='/Buses' element={<Buses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
