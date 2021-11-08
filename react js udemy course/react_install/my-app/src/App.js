import ExpenseItem from './components/Expenseltem';


import logo from './logo.svg';
import './App.css';


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <ExpenseItem         
        tittle={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
        >
        </ExpenseItem>
        
        <ExpenseItem         
        tittle={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
        >
        </ExpenseItem>
        
        <ExpenseItem         
        tittle={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
        >
        </ExpenseItem>
        
        <ExpenseItem         
        tittle={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
        >
        </ExpenseItem>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
        {/* <p>This i s first file</p> */}
      </header>
    </div>
  );
}

export default App;
