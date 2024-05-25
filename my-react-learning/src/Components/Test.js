import React from 'react';
import { createRoot } from 'react-dom/client';

class Username extends React.Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

function App() {
  function clickHandler() {
    this.changeValue()
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text" />
      <Username />
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));
root.render(<App />);

setTimeout(() => {
    document.querySelector("input").value = "John Doe";
    document.querySelector("button").click();

    setTimeout(() => {
        console.log(document.getElementById("root").innerHTML);
        // Additional code here
    }, 300);
}, 300);