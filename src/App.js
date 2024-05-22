import React, { useState } from 'react';
import './App.css';
import CodeEditor from './CodeEditor';
import PythonExecutor from './PythonExecutor';

function App() {
  const [code, setCode] = useState('');

  return (
    <div className="App">
      <h1>Online Python Compiler</h1>
      <CodeEditor code={code} setCode={setCode} />
      <PythonExecutor code={code} />
    </div>
  );
}

export default App;
