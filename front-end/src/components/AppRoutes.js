import { Router, Route } from 'react-router-dom';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Router>
  );
}
