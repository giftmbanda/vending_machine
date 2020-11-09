import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyBackdrop from "../components/MyBackdrop";

const MyTable = () => {
  const url = "/";
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(`${url}`);
      setLoading(false);
      if (response.status && response.statusText === "OK") {
        setProduct(response.data.data);
      } else {
        setProduct(null);
      }
    }
    fetchData();
  }, [url]);

  const handleBack = (id) => {
    async function PostData (id) {
      setLoading(true);
      const response = await axios.post(`/${id}`);
      setLoading(false);
      if (response.status && response.statusText === "OK") {
        setProduct(response.data.data);
      } else {
        setProduct(null);
      }
    }
  };

  return (
    <div>
      <MyBackdrop loading={loading} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quantity</th>
            <th>type</th>
            <th>price</th>
            <th>purchase</th>
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
              <td> <Button variant="primary" onClick={()=>handleBack(prod.id)}>Purchase</Button>{' '}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTable;
