import React, { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [count, setCount] = useState<number>(0);

  // useEffect(() => {}, []);

  return (
    <div>
      <span>Click sdfsf hdfere to increddfase counter</span>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

export default App;
