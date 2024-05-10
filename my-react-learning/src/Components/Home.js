import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
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
    </div>
  );
};

export default Home;
