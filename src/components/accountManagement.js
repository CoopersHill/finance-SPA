import React, {useState} from 'react'
import { Grid,Checkbox, TextField, FormControlLabel, Badge, Card, CardContent, Button, GridList} from '@material-ui/core';



import allTransactions from '../Functions/apiCall'
// create account form
// link to transaction page
// buttons representing accounts on left side reveal acount component populated with mock account dat
// button that toggles account Form
class AccountManagement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          toggleCreateAccount: false,
          items: []
        }
    }
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://testwarrenfinanceapi.azurewebsites.net/api/BankAccounts')
        .then(response => response.json())
        .then((data) =>{
           
          let realData = (data) ? data : [{itemName: 'testItem', itemCost: 10}]
    
          this.setState({
                items: data
            })
            console.log('real data', realData)
        }).catch((e)=>{
            console.log(e)
        })
    }



render(){
    return(
        <div>
        <CreateAccountForm className='m-2'/>


        <div style={{height: '50vh', width: '75vw', overflow: 'auto'}} className="table-responsive mt-1">
        <table className="table table-striped table-hover table-bordered mb-4">
          
        <thead className="thead-light">
           

          <tr>
            
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>

              <th scope="col">Balance</th>

              <th scope="col">Reconciled</th>
            </tr>
          </thead>


          <tbody>
          
          {this.state.items.map((m)=>{
            return(
                <tr key={m.id}>
                <td> {this.state.items.indexOf(m) + 1}</td>
                <td >{m.accountType}  </td>

                <td > <a href={`/transactions/${m.accountOwnerId}`}>{m.accountDescription}</a>  </td>
                <td >{m.accountBalance}</td>

                <td >{m.transactions.length > 0 ? m.transactions.length : 'NO TRANSACTIONS'}</td>
                </tr>
            )
        })}
            
         
            </tbody>
        </table>
      </div>




        
       
        

        
        </div>
        
        )

}

}



const CreateAccountForm = () =>{
    const [accountType, setAccountType] = useState('checking')
    const [accountDescription, setAccountDescription] = useState(`${accountType} Account`)

    
    // accounttype needs to be a number until the api changes it to a string
const createAccount = ()=>{
    
    let accountObject = {
        accountType: 0,
        accountDescription, 
        
    }
console.log(accountObject)
fetch('https://cors-anywhere.herokuapp.com/https://testwarrenfinanceapi.azurewebsites.net/api/BankAccounts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(accountObject)
})
.then(response => response.json())
.then((data)=>{
    console.log(data)
    location.assign('/')
})
  
}

    return (
    
        <div className='text-left'  >
    
        <h5 className='mx-3'>Create Account</h5>
        <form className='mx-2 text-center' style={{border: '1px solid black', width: '360px', display: 'flex', flexDirection: 'row'}} onSubmit={(e)=>{
           e.preventDefault()
          createAccount()
       }}>
       <select 

       onChange={(e)=>{
           e.preventDefault()
           setAccountType(e.target.value)
           
       }}
       
       name='accountTypeDropdown' >
       <option className='text-right' value ='checking'> Type</option>
       <option className='text-center' value = 'checking'> Checking</option>
       <option className='text-center' value = 'savings'> Savings</option>
       <option className='text-center' value = 'joint'> Joint</option>
       </select>
       <TextField
       label='Description'
       placeholder='Description'
       type='text' maxLength='50' onChange={(e)=>{
           setAccountDescription(e.target.value)
       }} />
       <button        style={{height: '3rem', width: '9rem'}}
       > add account</button>
       </form>
    
        </div>
    
    )
    
    
    
    }
export default AccountManagement