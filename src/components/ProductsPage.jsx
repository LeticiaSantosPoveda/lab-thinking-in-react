import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

const productsArr = [...jsonData];

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const searchProductHandler = (searchValue) =>{
    const filteredProduct = productsArr.filter(element =>{
        if (searchValue.length < 1) return productsArr
        else return element.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    setProducts(filteredProduct);
  }

  const stockProducts = (e) => {
        if (e.target.checked === true) {
        const filteredProd = products.filter(element => element.inStock);
        setProducts(filteredProd);
        } else {
            setProducts(productsArr);
        }
    }

  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar searchProductHandler={searchProductHandler}/>
        <p>Display only items in stock: <input type="checkbox" onChange={stockProducts}/></p>
        
        <ProductTable products={products}/>
          
      </div>    
  )
}

export default ProductsPage;