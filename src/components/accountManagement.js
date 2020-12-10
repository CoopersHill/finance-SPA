import React, {useState} from 'react'
import { Grid,Checkbox, FormControlLabel, Badge, Card, CardContent, Button, TextField} from '@material-ui/core';

import allTransactions from '../Functions/apiCall'
// create account form
// link to transaction page
// buttons representing accounts on left side reveal acount component populated with mock account dat
// button that toggles account Form
class AccountManagement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          items: []
        }
    }
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://hwfinanceapp20201201223059.azurewebsites.net/api/transactions')
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
        
        AccountManagement
        
         
        <div>
        <CreateAccountForm/>
        
        </div>
        <Grid>
        <AccountPage items={this.state.items}/>

        </Grid>
        </div>
        
        )

}

}

const AccountPage =(props)=>{
    return(
        <div >
       


        <table style={{
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
          <tbody>
        <tr>
        <th>one</th>
        <th>two</th>
        <th>three</th>
        </tr>
 
 
 
        <tr>
      
        {
            props.items.map((m)=>{
       return (
          <tr key={m.id}>
          <td   style={{border: '2px solid black', width: '10rem' }} className='m-2'>
          <Checkbox style={{width: '3rem'}}/>
            
          </td>
          <td style={{border: '2px solid black', width: '10rem' }} className='m-2'>
          <h6 className='m-2'>Checking</h6>
          </td>
          <td style={{border: '2px solid black', width: '10rem' }} className='m-2'>
          <h6 className='m-2'>{m.itemName}</h6>
          </td>
          
          <td style={{border: '2px solid black', width: '10rem' }} className='m-2'>
          <h6 className='m-2'>Balance</h6>
          </td>
          
        </tr>
       )
            })
        }
</tr>
        </tbody>
        </table>
       
        </div>
    )
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
       <TextField type='text'/>
       <button> + add account</button>
       </form>
    
    
    
        </div>
    
    )
    
    
    
    }
export default AccountManagement