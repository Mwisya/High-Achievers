import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdmissionPage from './pages/AdmissionPage';
import Homepage from './pages/Homepage';
import Noticepage from './pages/Noticepage';


function App() {
  return (
      <div className="App">
        <BrowserRouter basename='/'>
        <Routes>
          <Route path="/"  element={<Homepage/>}/>
          <Route path="/admission" element={<AdmissionPage/>}/>
          <Route path="/notice" element={<Noticepage/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
