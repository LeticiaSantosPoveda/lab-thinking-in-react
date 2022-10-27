import ProductRow from "./ProductRow";

function ProductTable({products}){


    return (
      <table className="table" style={{margin: "auto", width: "80vw"}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product =>{
                return (
                    <ProductRow products={product}/>
                )
            })}
        </tbody>
      </table>
    )
}

export default ProductTable;