import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3'

function App() {

  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div className="App">
      <header className="App-header">

        {/* Exercise 1 and 2: */}
        {/* <p>Hello World</p>
        {myelement}
        <p>React is {sum} times better with JSX</p>

        <h3>first name: {user.firstName}</h3>
        <h3>last name: {user.lastName}</h3>

        <UserFavoriteAnimals favAnimals = {user.favAnimals}/> */}

        {/* Exercise 3: */}
        <Exercise />
      </header>
    </div>
  );
}

export default App;
