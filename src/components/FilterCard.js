import React, {useState} from 'react'

import { Grid, Badge, Card,FormControl, Checkbox, TextField, Button, Divider} from '@material-ui/core';
import{filterByName, filterByStatus, filterByCost} from '../Functions/filterFunctions'


const FilterCard =(props)=>{

const [alpha, setAlpha] = useState('')
const [omega, setOmega] = useState('')

const [nameForm, toggleNameForm] = useState(false)
const [statusForm, toggleStatusForm] = useState(false)
const [costForm, toggleCostForm] = useState(false)



    return(
<div>
<Card>

filter toggle buttons go here
<button
onClick={()=>{
    toggleNameForm(!nameForm)
}}
>
filter by name
</button>

<button
onClick={()=>{
    toggleStatusForm(!statusForm)
}}
>
filter by status
</button>

<button
onClick={()=>{
    toggleCostForm(!costForm)
}}
>
filter by range of costs
</button>

</Card>

<Card>
<div > Name form
{nameForm 
    ?
    <ItemNameForm handleItemsChange={props.handleItemsChange} items={props.items}/>
     : 
     <p></p>
    }

</div>

<div> Status form
{
    statusForm ? <RecStatusForm handleItemsChange={props.handleItemsChange} items={props.items} /> :<p></p>
}

</div>
<div > Cost form
{costForm 
    ?
    <CostRangeForms handleItemsChange={props.handleItemsChange} items={props.items}/>
     : 
     <p></p>
    }

</div>

filterForms go here


</Card>


</div>

    )
}


 const ItemNameForm =(props)=>{
    
    const [searchTerm, setSearchTerm] = useState('')

    
    return(
<div>

<form onSubmit={(e)=>{
e.preventDefault()
props.handleItemsChange(filterByName(props.items, searchTerm))
}}>
searching for: {searchTerm}
<TextField
variant='outlined'
onChange={(e)=>{
e.preventDefault()
setSearchTerm(e.target.value)
}}

/>
<button
name='itemName'

>
search
</button>



</form>
</div>
    )
 }

 const RecStatusForm =(props)=>{
    
    const [recStatus, setRecStatus] = useState(false)

    
    return(
        <div>
        form {recStatus}
    
<button
name='recStatus'
onClick={(e)=>{
    e.preventDefault()
    props.handleItemsChange(filterByStatus(props.items, true))
    setRecStatus(true)
    console.log(recStatus)
}}

>
complete
</button>

<button
name='recStatus'
onClick={(e)=>{
    e.preventDefault()
    props.handleItemsChange(filterByStatus(props.items, false))
    setRecStatus(false)
    console.log(recStatus)
}}

>
pending
</button>

        </div> 
    )
 }


 const CostRangeForms =(props)=>{
    const [alpha, setAlpha] = useState(0)
const [omega, setOmega] = useState(0)
    
    return(
        <div>
form
<form
onSubmit={(e)=>{
e.preventDefault()
props.handleItemsChange(filterByCost(props.items, alpha))
console.log(filterByCost(props.items, alpha))
}}
>

<TextField 
label={alpha}
type='number'
onChange={(e)=>{
    setAlpha(e.target.value)
    console.log(alpha)
}}
variant='outlined'/>
<TextField 
type='number'
label={omega}
onChange={(e)=>{
    setOmega(e.target.value)
}}
variant='outlined'/>


<button

>
cost range
</button>

</form>
</div>
    )
 }


 

 const DateRangeForms =()=>{
    
    
    return(
        <div>
form
<form>

<TextField/>
<TextField/>



<button
name='recDate'
onClick={(e)=>{
    e.preventDefault()
    
    console.log(e.target.name)
}}
>
date range
</button>


</form>
</div>
    )
 }



export default FilterCard