import { useSelector } from "react-redux"
import type { CounterState } from "./counterReducer";
import { Typography } from "@mui/material";

export default function Contact() {
  const data = useSelector((state: CounterState) => state.data);
  return (
    <>
    <Typography variant="h2">
      Contact page
    </Typography>
    
    <Typography variant="body1">
      the data is {data}
    </Typography>
    </>
  )
}