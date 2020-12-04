import React, {useState} from 'react';

import {
    Grid,
    FormControlLabel,
    Checkbox,
    Card,
    MenuItem,
    TextField,
    FormControl,
    FormHelperText,
    Divider
  } from '@material-ui/core';

const CreateTransactionForm =(props)=>{

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
        <div style={{border: ' 5px solid green', height: '100%', width: '20rem'}}>
        <Card className="p-4 mb-4">
        <div className="font-size-lg font-weight-bold">{props.itemName}</div>
        <div className="font-size-lg font-weight-bold">{props.itemCost}</div>

        <Divider className="my-4" />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <div className="p-3">
              
            
            
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
            </div>
          </Grid>
<button
onClick={(e)=>{
    e.preventDefault()
postTransaction()
}}
>
post transaction
</button>
        </Grid>
      </Card>
     
        </div>
    )
}

export default CreateTransactionForm