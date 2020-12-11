import React, {useState} from 'react'
import { Grid,Checkbox, FormControlLabel, Badge, Card, CardContent, Button, GridList} from '@material-ui/core';



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
        <CreateAccountForm/> 

        <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered mb-4">
          <thead className="thead-light">
            <tr>
            
              <th scope="col">#</th>
              <th scope="col">Account</th>
              <th scope="col">Balance</th>
              <th scope="col">---</th>

              <th scope="col">Reconciled</th>
            </tr>
          </thead>


          <tbody>
          
          {this.state.items.map((m)=>{
            return(
                <tr key={m.id}>
                <td>{m.id}</td>
                <td > <a href='http://www.google.com'>{m.accountDescription}</a>  </td>
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
    let accountObject = {
        alpha: 0,
        beta: 0, 
        gamma: 0, 
        delta:0
    }
    return (
    
        <div style={{width: '200px'}}>
       <form>
       <input type='text'/>
       <button> add account</button>
       </form>
    
        </div>
    
    )
    
    
    
    }
export default AccountManagement