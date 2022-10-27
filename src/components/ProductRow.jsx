import React from 'react'

function ProductRow({products, inStock}) {

  return (
        <tr>
            <td style={{margin: "auto", width: "80vw"}}>
                {products.inStock ? <p>{products.name}</p> : <p style={{"color":"red"}}>{products.name}</p>}
            </td>
            <td>
                {products.price}
            </td>
        </tr>
  )
}

export default ProductRow;