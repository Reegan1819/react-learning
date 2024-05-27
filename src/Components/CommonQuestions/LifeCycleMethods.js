import React from "react";

const LifeCycleMethods = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>lifecycle methods</h1>
      <table>
        <tr>
          <th>Mounting</th>
          <th>Updating</th>
          <th>Unmounting</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>constructor()</li>
              <li>static getDerivedStateFromProps()</li>
              <li>render()</li>
              <li>componentDidMount()</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>static getDerivedStateFromProps()</li>
              <li>shouldComponentUpdate()</li>
              <li>render()</li>
              <li>getSnapshotBeforeUpdate()</li>
              <li>componentDidUpdate()</li>
            </ul>
          </td>
          <td>
            <li>componentWillUnmount()</li>
          </td>
        </tr>
      </table>

      <h2>Mounting</h2>
      <p>
        These methods are called in the following order when an instance of a
        component is being created and inserted into the DOM:
      </p>
      <ul>
        <li>constructor()</li>
        <li>static getDerivedStateFromProps()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
      </ul>

      <h2>Updating</h2>
      <p>
        An update can be caused by changes to props or state. These methods are
        called in the following order when a component is being re-rendered:
      </p>
      <ul>
        <li>static getDerivedStateFromProps()</li>
        <li>shouldComponentUpdate()</li>
        <li>render()</li>
        <li>getSnapshotBeforeUpdate()</li>
        <li>componentDidUpdate()</li>
      </ul>

      <h2>Unmounting</h2>
      <p>
        This method is called when a component is being removed from the DOM:
      </p>
      <ul>
        <li>componentWillUnmount()</li>
      </ul>
    </div>
  );
};

export default LifeCycleMethods;
