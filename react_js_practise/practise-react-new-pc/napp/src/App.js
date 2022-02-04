import logo from './logo.svg';
import './App.css';

//props example
// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//       <h1>age{props.age}</h1>
//       <h1>age{props.adrs}</h1>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" />
//       <Hello name="Daisy" />
//       <Hello age="25"/>
//       <Hello adrs="2fdf5 foy"/>
//     </div>
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App;
