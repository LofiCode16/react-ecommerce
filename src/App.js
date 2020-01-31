import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import TopMenu from './components/TopMenu';
import useFetch from './hooks/useFetch';
import { URL_API_PRODUCTS, STORAGE_PRODUCTS_CART } from './utils/constants';
import Products from './components/Products';


function App() {

  const products = useFetch(URL_API_PRODUCTS, null);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () =>{
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);

    if(idsProducts){
      const idsProductsSplit = idsProducts.split(',');
      setProductsCart(idsProductsSplit);
    }else{
      setProductsCart([]);
    }
  }

  const addProductCart = (id, name) => {

    const idsProducts = productsCart;
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart)
    getProductsCart();
    toast.success(`${name} añadido correctamente!`)
    
  }
  
  return (
    <div>
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products} />      
      <Products products={products} addProductCart={addProductCart} />
      <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
