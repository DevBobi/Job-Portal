import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Shared/Login/Login';
import Registration from './Pages/Shared/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Registration />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
