import { useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const ChooseRandom = () => {
    const newNumber = Math.floor(Math.random() * 10000);
    setNumbers([...numbers, { id: numbers.length, value: newNumber }]);
  };

  return (
    <div>
      <h1>random-number</h1>
      <hr />
      <br />
      <button onClick={ChooseRandom}>Make Random</button>
      <ol>
        {numbers.map((number) => {
          return (
            <li key={number.id}>
              <hr />
              <h3>{number.value}</h3>
            </li>
          );
        })}
        <hr />
      </ol>
    </div>
  );
};

export default App;
