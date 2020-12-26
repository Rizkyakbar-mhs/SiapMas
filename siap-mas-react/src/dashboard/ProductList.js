import React from 'react'

const ProductList = ({products}) => {
    console.log(products);
  return (<table class="rwd-table">
  <tr>
      <th>Name</th>
      <th>Qty</th>
      <th>Type</th>
      <th>Price</th>
      <th>Grand Price</th>
      <th>Exp Date</th>
  </tr>
      { products && products.map(product => {
        return (
            <tr>
                <td data-th="Name">{product.Name}</td>
                <td data-th="Qty">{product.Qty}</td>
                <td data-th="Type">{product.Qty}</td>
                <td data-th="Price">{product.Price}</td>
                <td data-th="Grand Price">{product.Price}</td>
                <td data-th="Exp Date">{product.Date}</td>
            </tr>
        )
      })}  
    </table>
  )
}

export default ProductList