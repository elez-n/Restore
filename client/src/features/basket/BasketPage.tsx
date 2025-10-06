import { Typography } from "@mui/material";
import { useFetchBasketQuery } from "./basketApi"

export default function BasketPage() {
  const {data, isLoading, error} = useFetchBasketQuery();

  if(isLoading) return <Typography>Loading...</Typography>
  if(error) return<Typography>Error.</Typography>
  if(!data) return <Typography variant="h3">Your basket is empty.</Typography>

  return (
    <div>{data.basketId}</div>
  )
}