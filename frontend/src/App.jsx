import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import { Splitwise } from './Splitwise';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trip" element={<Form />} />
      <Route path="/splitwise" element={<Splitwise />} />
    </Routes>
  );
}
