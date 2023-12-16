import React, { useEffect, useState } from 'react';
import './styles.css';
function App() {
  const name = 'sdf';
  const [open, setIsOpen] = useState < String > '';

  return <h1>Hello Manually created react app</h1>;
}

export default App;

// ? TODO

// husky
// add env for development and production on webpack so that different presets are used.
// LINT : so that when pushing everything is saved
// add prettier
