import GitHubCard from "./Components/Card/Card";
import { useState } from "react";
import "./App.css";
import BootstrapButton from "./Components/Button/Button";

function App() {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  const handleToggle = (search) => {
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    setActive(!active);
  };

  const getSearch = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="usuário do GitHub" onChange={getSearch}></input>
        <BootstrapButton
          handleToggle={() => handleToggle(search)}
        ></BootstrapButton>
        {active && user.id !== undefined && <GitHubCard user={user} />}
      </header>
    </div>
  );
}

export default App;
