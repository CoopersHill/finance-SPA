import React from 'react';

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

const CrudForm =(props)=>{
    return(
        <div>
        <Card className="p-4 mb-4">
        <div className="font-size-lg font-weight-bold">Controls types</div>
        <Divider className="my-4" />
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <div className="p-3">
              
            
            
            <TextField
            value={props.itemName}
                onChange={(e)=>{
                    e.preventDefault()
                    props.handleItemName(e.target.value)
                }}
                className="m-2"
                type='text'
                label="Standard"
                variant="outlined"
              />
              <TextField
              className="m-2"
        type='number'
step='.01' min='.01' max='10000000000000000000000000'
                label="Cost"
                variant="outlined"
              />
              <TextField
              className="m-2"
  

                label="Outlined"
                variant="outlined"
              />
            </div>
          </Grid>

        </Grid>
      </Card>
     
        </div>
    )
}

export default CrudForm