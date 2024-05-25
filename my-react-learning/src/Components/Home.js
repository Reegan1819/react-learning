import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const strings = "Hello";

  //output [Hello, olleH, Eholl, lleHo, ollHe, Hloel, elolH, lHelo, oHlle, lelHo, olHel, loHle, eHlol, lloHe, elHlo, loelH, leHol, elHo]

  const permute = (str) => {
    if (str.length === 0) return [str];
    const [first, ...rest] = str;
    const perms = permute(rest.join(""));
    const result = [];
    for (const perm of perms) {
      for (let i = 0; i <= perm.length; i++) {
        result.push(perm.slice(0, i) + first + perm.slice(i));
      }
    }
    return result;
  };

  console.log(permute(strings));

  //

  const reverse = (str) => {
    return str.split("").reverse().join("");
  };

  console.log(reverse(strings));

  return (
    <div>
      <h1>Home</h1>
      <Link to="/intro-myself">Introduce Myself</Link>
      <br />
      <Link to="/about-react">About React</Link>
      <br />
      <Link to="/about-react-hooks">About React Hooks</Link>
      <br />
      <Link to="/about-react-router">About React Router</Link>
      <br />
      <Link to="/about-react-redux">About React Redux</Link>
      <br />
      <Link to="/about-react-pure-component">About React PureComponent</Link>
      <br />
      <Link to="/about-life-cycle-methods">About Life Cycle Methods</Link>
      <br />
      <Link to="/about-react-optimize">About React Optimize</Link>
      <br />

      <Link to="/about-react-design-patterns">About React Design Patterns</Link>
      <br />
      <Link to="/about-react-interview-questions">
        About React Interview Questions
      </Link>
      <br />
      <Link to="/about-react-quiz">About React Quiz</Link>
      <br />
      <Link to="/about-react-search-engine-optimization">
        About React Search Engine Optimization
      </Link>
      <br />
      <Link to="/about-react-control-uncontrolled">
        About React Controlled and Uncontrolled Components
      </Link>
      <br />
      <Link to="about-react-interview-questions">
        About React Interview Questions
      </Link>
      <br />
      <br />
      <Link to="/frontend-interview-questions">
        About Frontend Interview Questions
      </Link>
      <br />
      <br />
      <Link to="/forty--react-js-interview-questions">
        Forty React JS Interview Questions
      </Link>
      <br />
      <br />
      <Link to="/Typescript">Typescript</Link>
      <br />
      <Link to="/NextJs">NextJs</Link>
      <br />
      <br />
      <Link to="/Testing">Testing</Link>
    </div>
  );
};

export default Home;
