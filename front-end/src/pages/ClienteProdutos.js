import React, { useEffect, useContext } from 'react';
import Navbar from '../components/NavBar';
import DeliveryAppContext from '../context/DeliveryAppContext';

function ClienteProdutos() {
//   const [result, setResult] = useState([]);
  const { fetchProducts, setFetchProducts } = useContext(DeliveryAppContext);
  const endpoint = 'http://localhost:3001/products';

  // const fetchProducts = async () => {
  //   const options = { method: 'GET' };

  //   await fetch('http://localhost:3001/products', options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  const getAPIs = async () => { // requisição à API com o endpoint como parâmetro, pois será decidido apenas após aperta o botão de busca
    const response = await fetch(endpoint);
    const json = await response.json();
    console.log('json', json);
    // setDoRedirect(true); // irá redirecionar para a tela de detalhes da receita caso apareça apenas uma ao clicar no searchButton
    return json;
  };

  useEffect(async () => {
    setFetchProducts(await getAPIs());
  }, []);

  return (
    <div>
      <Navbar />
      { (
        fetchProducts.map((products) => (
          <div
            key={ products.id }
          >
            <p data-testid={ `customer_products__element-card-price-${products.id}` }>
              {products.price}

            </p>
            <img
              data-testid={ `customer_products__element-card-bg-image-${products.id}` }
              src={ products.urlImage }
              alt={ `É a foto de ${products.name}` }
            />
            <p data-testid={ `customer_products__element-card-title-${products.id}` }>
              { products.name }

            </p>
          </div>
        ))) }
    </div>
  );
}

export default ClienteProdutos;
