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
        
       
         <CreateAccountForm/> 

         <AccountPage items={this.state.items}  style={{
            marginLeft: 'auto',
            marginRight: 'auto'
          }}/>
        
        </div>
        
        )

}

}

const AccountPage =(props)=>{
    return(
        <div >
       

        
        <div style={{display: 'flex', flexDirection: 'column', width:'75vw', overflow:'auto'}}>
       
        {
            props.items.map((m)=>{
       return (
          
          <div key={m.id} className='text-center' style={{width:'100vw', border: '2px dashed black', display: 'flex', flexDirection: 'row'}} >
          <div  style={{border: '2px solid black', width: '25%' }} className='m-2'>
<button>
Transactions
</button>            
          </div>
          <div  style={{border: '2px solid black', width: '25%' }} className='m-2'>
          <Checkbox style={{width: '3rem'}}/>
            
          </div>
          <div style={{border: '2px solid black', width: '25%' }} className='m-2'>
          <h6 className='m-2'>Checking</h6>
          </div>
          <div style={{border: '2px solid black', width: '25%' }} className='m-2'>
          <h6 className='m-2'>{m.itemName}</h6>
          </div>
          
          <div style={{border: '2px solid black', width: '25%' }} className='m-2'>
          <h6 className='m-2'>Balance</h6>
          </div>
          
          </div>
        
       )
            })
        }
      
        </div>
       
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
       <input type='text'/>
       <button> add account</button>
       </form>
    
        </div>
    
    )
    
    
    
    }
export default AccountManagement