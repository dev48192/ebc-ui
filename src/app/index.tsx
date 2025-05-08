import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MaterialDepo from '../pages/MaterialDepo';
import Home from '../pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/material-depo" element={<MaterialDepo />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} /> {/* Fallback to Home */}
      </Routes>
    </BrowserRouter>
  );
}
