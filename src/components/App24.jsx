import React from 'react';

function Person(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>EyeColor: {props.eyeColor}</p>
      <p>Age: {props.age}</p>
      <hr />
    </div>
  );
}

Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45"
};

export default function App24() {
  return (
    <div>
       <Person name="Kapil" eyeColor="blue" age="23" /> 
      {/* <Person name="Sachin" eyeColor="blue" />
      <Person name="Nikhil" age="23" />
      <Person eyeColor="green" age="23" /> */}
      
    </div>
  );
}
