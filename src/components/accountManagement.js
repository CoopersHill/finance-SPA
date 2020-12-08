import React from 'react'

import allTransactions from '../Functions/apiCall'
// create account form
// link to transaction page

let AccountManagement =()=>{
  
return(
<div>
 AccountManagement
 <CreateAccount/>
</div>

)

}


const CreateAccount = () =>{

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