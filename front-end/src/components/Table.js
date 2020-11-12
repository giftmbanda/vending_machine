import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Load from "./Load";
import Title from "./Title";


const MyTable = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const formResponse = props.formResponse;

  useEffect(() => {
    const fetchData = async () => {
      const url = "/";
      setLoading(true);
      const response = await axios.get(`${url}`);
      setLoading(false);
      setProducts(response.data.data);
    }
    fetchData();
  }, [formResponse]);


  const currencyFormat = (num) => {
    return num.toFixed(2);
  }


  return (
    <>
      <Load loading={loading} />
      <Title>Products</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Price</b></TableCell>
            <TableCell><b>Category</b></TableCell>
            <TableCell><b>Quantity</b></TableCell>
            <TableCell><b>Item Location</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{currencyFormat(row.price)}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default MyTable;