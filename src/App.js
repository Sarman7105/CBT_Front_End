import { Route, Routes } from "react-router-dom";
import ReportDetails from './components/ReportDetails';
import Reports from "./components/Reports";
import './global.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Reports />} />
        <Route path="/reportDetails/:id" element={<ReportDetails />} />
      </Routes>
    </div>
  );
}

export default App;
