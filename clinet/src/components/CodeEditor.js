import React, { useState } from 'react'
// import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import Editor from "@monaco-editor/react";


const CodeEditor = (props) => {

    const {language, displayName, value, onChange} = props

    const handleChange = (value) => {
        onChange(value)
    }

    const [open, setOpen] = useState(true)


  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className='editor-title'>
        {displayName}
        <button
        onClick={() => setOpen(prevOpen => !prevOpen)}
        >O/C</button>
      </div>

    

    <Editor
        className='code-mirror-wrapper'
        language={language}
        value={value}
        theme='vs-dark' 
        onChange={handleChange}
      />

    </div>
  )
}

export default CodeEditor
