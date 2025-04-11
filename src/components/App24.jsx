import React from 'react';

function Person({ name = "Rahul", eyeColor = "deepblue", age = "45" }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>EyeColor: {eyeColor}</p>
            <p>Age: {age}</p>
            <hr />
        </div>
    );
}

export default function App24() {
    return (
        <div>
            <p>`defaultProps` in React lets you set default values for props so your component still works even if no values are passed. <br></br>
            It helps avoid errors and keeps your app running smoothly.</p>
            {/* <Person name="Kapil" eyeColor="blue" age="23" />  */}
            {/* <Person name="Sachin" eyeColor="blue" />
      <Person name="Nikhil" age="23" />
      <Person eyeColor="green" age="23" /> */}
            <Person />
        </div>
    );
}
