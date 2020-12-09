import logo from './logo.svg';
import './App.css';
import Transactions from './components/Transactions'
import Header from './components/Header'
import AccountManagement from './components/accountManagement'

function App() {
  return (
    <div className="App">
   <Header/>
   <br></br>
   <br></br>
    <AccountManagement/>
    <Transactions/>

    </div>
  );
}

export default App;
