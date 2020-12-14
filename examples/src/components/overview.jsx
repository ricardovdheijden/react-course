import React from 'react';
import {NavLink} from "react-router-dom";

const Overview = () => {
  return (
    <ul>
      <li><NavLink to="/class-functional">02 - Class Component and Functional Component</NavLink></li>
      <li><NavLink to="/prop-types">03 - PropTypes</NavLink></li>
    </ul>
  );
};

export default Overview;
