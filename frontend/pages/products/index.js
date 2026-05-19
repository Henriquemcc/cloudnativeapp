import { useState } from "react";
import TableBody from "@mui/material/TableBody";
import List from "@mui/material/List";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';

import PageHeader from "../../components/pagetemplate/PageHeader";
import PageContent from "../../components/pagetemplate/PageContent";
import PageContentLabels from "../../components/pagetemplate/PageContentLabels";

const pageLabel = "Products";
const itemsLabels = [
  "Id",
  "Name",
  "Price",
  "Category",
  "Count",
  "Rating",
  "Actions",
];

const productsList = [
  { name: "P1", price: 1, category: "C1", count: 1, rating: 1, id: 1 },
  { name: "P2", price: 2, category: "C2", count: 2, rating: 2, id: 2 },
];

const getProducts = async () => {
  setProducts(productsList);
};

const createProduct = async () => {
  alert('createProduct()');
};

const editProduct = async (id) => {
  alert(`editProduct(): ${id}`);
}

export default function Products() {
  const [products, setProducts] = useState(productsList);

  return (
    <List>
      <PageHeader pageLabel={pageLabel}>
        <PageActions createProduct={createProduct} />
      </PageHeader>
      <PageContent>
        <PageContentLabels labels={itemsLabels} />
        <PageContentItems products={products}
        editProduct={editProduct} />
      </PageContent>
    </List>
  );
}

function PageContentItems({ products }) {
  return (
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>{product.count}</TableCell>
          <TableCell>{product.rating}</TableCell>
          <PageContentActions
            id={product.id}
            editProduct= {editProduct}/>
        </TableRow>
      ))}
    </TableBody>
  );
}

function PageActions({ createProduct }) {
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => createProduct()}
      >
        Create
      </Button>
    </>
  );
}

function PageContentActions({id, editProduct}) {
  return (
    <>
    <TableCell>
      <Button
      size="small"
      variant="contained"
      onClick={() => editProduct(id)}>
        Edit
      </Button>
    </TableCell>
    </>
  )
}