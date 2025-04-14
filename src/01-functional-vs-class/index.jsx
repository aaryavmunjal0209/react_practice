import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

const FunctionalVsClass = () => {
  return (
    <div>
      <h2>Functional Component</h2>
      <FunctionalComponent name="Aaryav" />

      <h2>Class Component</h2>
      <ClassComponent name="Aaryav" />
    </div>
  );
};

export default FunctionalVsClass;
