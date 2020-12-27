import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DaftarObat from './DaftarObat'

const ProductList = ({products}) => {
  const [ObatID, setObatID] = useState('');

  const updateId=(value)=> {
    setObatID(value);
  };
    console.log(ObatID)
  return (<table class="rwd-table">
  <tr>
      <th>Name</th>
      <th>Qty</th>
      <th>Type</th>
      <th>Price</th>
      <th>Grand Price</th>
      <th>Exp Date</th>
      <th>Action</th>

      </tr>
      { products && products.map(product => {
        console.log()
        return (
            <tr key={product.id}>
                <td data-th="Name">{product.Name}</td>
                <td data-th="Qty">{product.Qty}</td>
                <td data-th="Type">{product.Qty}</td>
                <td data-th="Price">{product.Price}</td>
                <td data-th="Grand Price">{product.Price}</td>
                <td data-th="Exp Date">{product.Date}</td>
                <td data-th="Exp Date">
                <Link to="/DetailObat"><button>Detail</button></Link>
                <button value={product.id} onClick={() => DaftarObat().handleClick()}>Delete</button>
                </td>
            </tr>
        )
      })}  
    </table>
  )
}

export default ProductList