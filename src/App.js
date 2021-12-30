import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Jobs from './Pages/Jobs/Jobs';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import useAuth from './Hooks/useAuth';
import ViewJobs from './Pages/Home/ViewJobs/ViewJobs';


function App() {
  const { isLoggedIn, user } = useAuth()
  useEffect(() => isLoggedIn(), [])

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
          <Route path="/jobs" element={<PrivateRoute>
            <Jobs />
          </PrivateRoute>}>
          </Route>
          <Route path="/viewJobs" element={<PrivateRoute>
            <ViewJobs />
          </PrivateRoute>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
