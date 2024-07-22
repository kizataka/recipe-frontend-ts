import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Header } from './components/Header';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      {/* <Header /> */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
