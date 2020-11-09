import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const MyTable = () => {
  const url = "/";
  const [product, setProduct] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${url}`);
      if (response.status && response.statusText === "OK") {
        setProduct(response.data.products);
      } else {
        setProduct(null);
      }
    }
    fetchData();
  }, [url]);

  console.log(product);


  return (
    <div>
      <Table striped bordered hover marginTop="10">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quantity</th>
            <th>type</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.type}</td>
              <td>{`R ${prod.price}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTable;
