import React from 'react';


function Greeting({ name, message }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}


Greeting.defaultProps = {
  name: "EveryOne",
  message: "Welcome to our website!"
};

export default function App() {
  return (
    <div>
      <Greeting name="Srihitha" />
      <Greeting />
    </div>
  );
}
