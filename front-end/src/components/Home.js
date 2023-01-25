import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const redirectPage = () => {
    history.push('./login');
  };
  useEffect(() => {
    redirectPage();
  }, []);
  return (
    <div>opa</div>
  );
}

export default Home;
