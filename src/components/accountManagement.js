import React from 'react'
import { Grid, Badge, Card, CardContent, Button} from '@material-ui/core';

import allTransactions from '../Functions/apiCall'
// create account form
// link to transaction page
// buttons representing accounts on left side reveal acount component populated with mock account dat
// button that toggles account Form

let AccountManagement =()=>{
  
return(
<div>
 AccountManagement
 
 
<Grid>
<Grid>
<Card>
<CardContent>

<CreateAccount/>

</CardContent>
</Card>
</Grid>

<Grid>
<Card>
<CardContent>
<CreateAccount/>
</CardContent>
</Card>
</Grid>
</Grid>
</div>

)

}


const CreateAccount = () =>{
let accountObject = {
    
}
return (

    <div>
    create account

<button
onClick={()=>{
    allTransactions()
}}
>
test
</button>

    </div>

)



}

export default AccountManagement