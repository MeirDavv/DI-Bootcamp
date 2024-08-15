import { Greeting } from "./components/Greeting";
import Counter from "./components/Counter";
import "./App.css";
import { UserCard } from "./components/UserCard";
import DataFetcher from "./components/DataFetcher";

function App() {
  return (
    <>
      <Greeting name="Meir" />
      <Counter />
      <UserCard name="Meir"/>
      <DataFetcher/>
    </>
  );
}

export default App;
