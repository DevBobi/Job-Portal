import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Jobs from './Pages/Jobs/Jobs';


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
          <Route path="/jobs" element={<Jobs />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
