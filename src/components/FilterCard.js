import React, {useState} from 'react'

import { Card, TextField } from '@material-ui/core';
import{filterByName, filterByStatus, filterByCost} from '../Functions/filterFunctions'


const FilterCard = (props)=>{

const [alpha, setAlpha] = useState('')
const [omega, setOmega] = useState('')

const [nameForm, toggleNameForm] = useState(false)
const [statusForm, toggleStatusForm] = useState(false)
const [costForm, toggleCostForm] = useState(false)



    return(
<div>
<Card style={{border: '2px solid black'}}>
<button
onClick={()=>{
    props.handleItemsChange(props.items)
}}
>
RESET LIST
</button>
<button
onClick={()=>{
    toggleNameForm(!nameForm)
    toggleStatusForm(false)
    toggleCostForm(false)
}}
>
filter by name
</button>

<button
onClick={()=>{
    toggleStatusForm(!statusForm)
    toggleNameForm(false)
    toggleCostForm(false)}}
>
filter by status
</button>

<button
onClick={()=>{
    toggleCostForm(!costForm)
    toggleNameForm(false)
    toggleStatusForm(false)

}}
>
filter by range of costs
</button>

</Card>

<Card>
<div >
{nameForm 
    ?
    <ItemNameForm handleItemsChange={props.handleItemsChange} items={props.items}/>
     : 
     <p></p>
    }

</div>

<div> 
{
    statusForm ? <RecStatusForm handleItemsChange={props.handleItemsChange} items={props.items} /> :<p></p>
}

</div>
<div >
{costForm 
    ?
    <CostRangeForms handleItemsChange={props.handleItemsChange} items={props.items}/>
     : 
     <p></p>
    }

</div>




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
<h6>FILTER BY TITLE</h6>
<TextField
placeholder='TITLE'
variant='outlined'
onChange={(e)=>{
e.preventDefault()
setSearchTerm(e.target.value)
}}

/>
<hr></hr>
<button
name='itemName'

>
FILTER
</button>



</form>
</div>
    )
 }

 const RecStatusForm =(props)=>{
    
    const [recStatus, setRecStatus] = useState(false)

    
    return(
        <div>
        <h6>
        FILTER BY STATUS
        </h6>
    
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
<form
onSubmit={(e)=>{
e.preventDefault()

props.handleItemsChange(filterByCost(props.items, alpha, omega))
console.log(filterByCost(props.items, alpha, omega))
}}
>
<h6>COST FILTER</h6>
<input 
placeholder='MINIMUM'
min='.01'
required={true}
step='.01'
type='number'
onChange={(e)=>{
    setAlpha(e.target.value)
    console.log(alpha)
}}
/>
<input
placeholder='MAXIMUM'
min='.01'
step='.01'
type='number'
required={true}
onChange={(e)=>{
    setOmega(e.target.value)
}}
/>

<hr></hr>
<button

>
Filter
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