import { Grid2 } from "@mui/material"
import type { Product } from "../../app/models/Product"
import ProductCart from "./ProductCart"

type Props = {
  products: Product[]
}

export default function ProductList({products}: Props) {
  return (
    <Grid2 container spacing={3}>
        {products.map(product => (
            <Grid2 size={3} display={'flex'} key={product.id}>
              <ProductCart product={product}></ProductCart>
            </Grid2>
          ))}
      </Grid2>
  )
}