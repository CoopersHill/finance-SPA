import React, {useState} from 'react';

import {
    Grid,
    Button,
    FormControlLabel,
    Checkbox,
    Card,
    CardContent,
    MenuItem,
    TextField,
    FormControl,
    FormHelperText,
    Divider
  } from '@material-ui/core';

const CreateTransactionForm =()=>{

    const [itemName, setItemName] = useState('')
    const [itemCost, setItemCost] = useState(0)






const postTransaction = ()=>{
    let transactionObject = {
        itemName: itemName,
        itemCost: itemCost,
    }

    fetch('https://cors-anywhere.herokuapp.com/https://hwfinanceapp20201201223059.azurewebsites.net/api/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(transactionObject)
    })
    .then(response => response.json())
    .then((data)=>{
        console.log(data)
    })
}


    return(
       
        <Card style={{border: ' 5px solid green'}} className="card-box mb-4">
        <CardContent className="px-4 py-3">
         
        <TextField
        value={itemName}
            onChange={(e)=>{
                e.preventDefault()
                setItemName(e.target.value)
            }}
            className="m-2"
            type='text'
            label="Item"
            variant="outlined"
          />
          <TextField
          value={itemCost}
          onChange={(e)=>{
            e.preventDefault()
            setItemCost(e.target.value)
        }}
          className="m-2"
    type='number'
step='.01' min='.01' max='10000000000000000000000000'
            label="Cost"
            variant="outlined"
          />
          <Button
          fullWidth={true}
          color="primary"
          variant="outlined"
onClick={(e)=>{
e.preventDefault()
postTransaction()
}}
>
post transaction
</Button>
        </CardContent>
      </Card>
      




       
     
        
    )
}

export default CreateTransactionForm