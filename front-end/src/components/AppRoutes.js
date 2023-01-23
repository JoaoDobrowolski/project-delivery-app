import { Router, Route } from 'react-router-dom';

import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Route path="/" element={ <Login /> } />
      <Route path="/login" element={ <Login /> } />
    </Router>
  );
}
