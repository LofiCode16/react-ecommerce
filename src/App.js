import React, { useEffect } from 'react';
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import { URL_API_PRODUCTS } from './utils/constants';

function App() {

  const products = useFetch(URL_API_PRODUCTS, null);

  
  return (
    <div>
      <TopMenu />      
    </div>
  );
}

export default App;
