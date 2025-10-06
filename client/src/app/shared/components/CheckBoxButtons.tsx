import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  items: string[];
  checked: string[];
  onChange: (items: string[]) => void;
}

export default function CheckBoxButtons({items, checked, onChange}: Props) {
  const [chekcedItems, setCheckedItems] = useState(checked);

  useEffect(() => {
    setCheckedItems(checked);
  }, [checked]);

  const handleToggle = (value: string) => {
    const updatedChecked = chekcedItems?.includes(value)
    ? chekcedItems.filter(item => item !== value)
    : [...chekcedItems, value]

    setCheckedItems(updatedChecked);
    onChange(updatedChecked);
  }
 
  return (
    <FormGroup>
      {items.map(item => (
        <FormControlLabel
          key={item}
          control={<Checkbox
            checked={chekcedItems.includes(item)}
            onClick={()=> handleToggle(item)}
            color='secondary' sx={{ py: 0.7, fontSize: 40 }} 
          />}
          label={item}
        />
      ))}
    </FormGroup>
  )
}