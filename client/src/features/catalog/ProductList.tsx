import { Box } from "@mui/material"
import type { Product } from "../../app/models/Product"
import ProductCart from "./ProductCart"

type Props = {
  products: Product[]
}

export default function ProductList({products}: Props) {
  return (
    <Box sx={{display:'flex', flexWrap:'wrap', gap: 3, justifyContent:'center'}}>
        {
          products.map((product) => (
            <ProductCart key={product.id} product={product}></ProductCart>
          ))
        }
      </Box>
  )
}