import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Load from "./Load";
import Title from "./Title";
import { useSelector } from "react-redux";

const MyTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const formSubmissionFlag = useSelector((state) => state.form);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const products = await fetchData();
      setProducts(products.data.data);
      setLoading(false);
    };

    fetch();
  }, [formSubmissionFlag]);

  const formatCurrency = (num) => {
    return num.toFixed(2);
  };

  return (
    <>
      <Load loading={loading} />
      <Title>Products</Title>
      <Table size="small">
        <TableHead>
          {columnHeaders.map((col, index) => (
            <TableRow key={index}>
              <TableCell>
                <b>{col.name}</b>
              </TableCell>
              <TableCell>
                <b>{col.price}</b>
              </TableCell>
              <TableCell>
                <b>{col.category}</b>
              </TableCell>
              <TableCell>
                <b>{col.quantity}</b>
              </TableCell>
              <TableCell>
                <b>{col.location}</b>
              </TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {products.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{formatCurrency(row.price)}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MyTable;

const columnHeaders = [
  {
    name: "Name",
    price: "Price",
    category: "Category",
    quantity: "Quantity",
    location: "Item Location",
  },
];

const fetchData = async () => {
  return await axios.get("/");
};
