import React, { useState } from 'react';

const PythonExecutor = ({ code }) => {
  const [output, setOutput] = useState('');

  const executeCode = async () => {
    try {
      const response = await fetch('http://localhost:5000/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const result = await response.text();
      setOutput(result);
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div>
      <button onClick={executeCode}>Run Code</button>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default PythonExecutor;
