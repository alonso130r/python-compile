import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';

const CodeEditor = ({ code, setCode }) => {
  const editorRef = useRef();

  useEffect(() => {
    const editor = CodeMirror(editorRef.current, {
      value: code,
      mode: 'python',
      lineNumbers: true,
    });
    editor.on('change', (editor) => setCode(editor.getValue()));
  }, [code, setCode]);

  return <div ref={editorRef}></div>;
};

export default CodeEditor;
