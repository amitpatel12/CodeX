import React from 'react'
import { useState, useEffect } from 'react'
import CodeEditor from './CodeEditor'
import Iframe from 'react-iframe'
import useLocalStorage from './useLocalStorage'

const CombineEditor = () => {

    const [html, setHtml] = useLocalStorage('html','')
    const [css, setCss] = useLocalStorage('css','')
    const [js, setjs] = useLocalStorage('js','')
    const [srcDoc, setSrcDoc] = useState(``)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                 </html>
                `)
        }, 250);

        return () => clearTimeout(timeout)
    },[html, css, js])



  return (
    <>
        <div className='pane top-pane'>
            <CodeEditor 
                language='xml'
                displayName='HTML'
                value={html}
                onChange={setHtml}
            />
            <CodeEditor
                language='css'
                displayName='CSS'
                value={css}
                onChange={setCss}
            />
            <CodeEditor
                language='javascript'
                displayName='JS'
                value={js}
                onChange={setjs}
            />
        </div>

        <div className='pane'>
            <iframe
                srcDoc = {srcDoc}
                title='output'
                sandbox='allow-scripts'
                frameBorder="0"
                className='iframe-container'
            />
        </div>
    </>
  )
}

export default CombineEditor
