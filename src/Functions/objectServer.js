export let corsUrl = 'https://cors-anywhere.herokuapp.com/'

export let transactionsUrl = 'https://hwfinanceapp20201201223059.azurewebsites.net/api/Transactions'
export let bankAccountsUrl = 'https://hwfinanceapp20201201223059.azurewebsites.net/api/BankAccounts'


export let objectServer =(urlBase, params='')=>{
      
  return  fetch(urlBase + '/' + params)
    .then(response => response.json())
    .then((data)=>{
       console.log('logged data', data)
        return data
    })
    

}
