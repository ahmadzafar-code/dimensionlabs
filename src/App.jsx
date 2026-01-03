import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FellowshipPage from './FellowshipPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fellowship" element={<FellowshipPage />} />
      </Routes>
    </BrowserRouter>
  );
}